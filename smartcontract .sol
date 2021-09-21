// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LNDToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Land", "LND") {
        _mint(msg.sender, initialSupply);
         owner = msg.sender;
        totallandsCounter = 0;
    }
    struct Land //creates Land object
    {
        address ownerAddress; //stores owner address
        string location; //physical location of property
        uint value; //cost of property
        uint landID; //each property is uniquely identifiable
        
    }
    address public owner; //address of whoever deployed the contract
    uint public totallandsCounter; //total no of lands via this contract at any time
    //land addition event
    event Register(address _owner , uint _landID);
    
    //land transfer event
    //event Transfer(address indexed _from , address indexed _to , uint _landID);
    
    modifier isOwner //check if function caller is owner of contract
    {
        require(msg.sender == owner);
        _;
    }
    
    //one account can hold many lands(many LandTokens, each token one land)
    //mapping (address => uint) public __ownedLands;
    //land[] public ownedland;
    mapping (uint => Land) public __lanidlist;
    mapping(address => mapping(uint => Land)) public _ownerlands;
    mapping(address => uint) public __nooflands;
    
    function registerLand(string memory _location, uint _cost) public isOwner
    {
        totallandsCounter++;
        __nooflands[msg.sender]++;
        Land memory myLand = Land({
            ownerAddress: msg.sender,
            location: _location,
            value: _cost,
            landID: totallandsCounter //landID is simply the nth land added
        });
        __lanidlist[totallandsCounter] = myLand;
        _ownerlands[msg.sender][totallandsCounter]=myLand;
        emit Register(msg.sender, totallandsCounter); //norify network
    }
    
   function transferLand(address _landBuyer, uint _landID) public returns (bool)
  {
            if(__lanidlist[_landID].ownerAddress==msg.sender && balanceOf(_landBuyer)>=__lanidlist[_landID].value){
                  Land memory myLand = Land(
                  {
                        ownerAddress: _landBuyer,
                        location: __lanidlist[_landID].location,
                        value: __lanidlist[_landID].value,
                        landID: _landID
                    });
                     __lanidlist[_landID] = myLand;
                     _ownerlands[_landBuyer][_landID]= myLand;
                     __nooflands[_landBuyer]++;
                     __nooflands[msg.sender]--;
                     
                     approve(msg.sender,__lanidlist[_landID].value);
                     uint256 newvalue=__lanidlist[_landID].value;
                     /*approve(_landBuyer,newvalue);
                    transferFrom(_landBuyer,msg.sender,newvalue);*/
                    _transfer(_landBuyer,msg.sender,newvalue);
                    //remove land from current ownerAddress - assigns everything to 0
                    delete _ownerlands[msg.sender][_landID];
                    emit Transfer(msg.sender, _landBuyer, _landID); //inform the network
                    return true; 
            }
            return false;
    }
   function getLand(address _landSeller, uint _landID) public returns (bool){
       if(__lanidlist[_landID].ownerAddress==_landSeller && balanceOf(msg.sender)>=__lanidlist[_landID].value){
                  Land memory myLand = Land(
                  {
                        ownerAddress: msg.sender,
                        location: __lanidlist[_landID].location,
                        value: __lanidlist[_landID].value,
                        landID: _landID
                    });
                     __lanidlist[_landID] = myLand;
                     _ownerlands[msg.sender][_landID]= myLand;
                     __nooflands[msg.sender]++;
                     __nooflands[_landSeller]--;
                     approve(_landSeller,__lanidlist[_landID].value);
                     uint256 newvalue=__lanidlist[_landID].value;
                     /*approve(_landBuyer,newvalue);*/
                    transferFrom(msg.sender,_landSeller,newvalue);
                    //_transfer(_landBuyer,msg.sender,newvalue);
                    //remove land from current ownerAddress - assigns everything to 0
                    delete _ownerlands[_landSeller][_landID];
                    //emit Transfer(msg.sender, _landBuyer, _landID); //inform the network
                    return true; 
            }
            return false;
   }
   function returnLand_owner(address _landHolder, uint _index) public view returns (string memory, uint, address , uint)
    {
        return(_ownerlands[_landHolder][_index].location,
               _ownerlands[_landHolder][_index].value,
               _ownerlands[_landHolder][_index].ownerAddress,
               _ownerlands[_landHolder][_index].landID);
    }
    function returnLand(uint _index) public view returns (string memory, uint, address , uint)
    {
        return(__lanidlist[_index].location,
               __lanidlist[_index].value,
               __lanidlist[_index].ownerAddress,
               __lanidlist[_index].landID);
    }
    
    //4. GET TOTAL NUMBER OF LANDS OWNED BY AN ACCOUNT
    function getNoOfLands_owner(address _landHolder) public view returns (uint)
    {
        return __nooflands[_landHolder];
    }
    function getNoOfLands() public view returns(uint){
        return totallandsCounter;
    }
}