/*window.addEventListener('load', async () => {
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
});
console.log(window.web3.currentProvider)

// contractAddress and abi are setted after contract deploy
var contractAddress = '0xF9833963AAC7F0eC89cC54dAd4cCb008949cEE71';
*/
var abi = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"_landID","type":"uint256"}],"name":"Register","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_landSeller","type":"address"},{"internalType":"uint256","name":"_landID","type":"uint256"}],"name":"getLand","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_location","type":"string"},{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"registerLand","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_landBuyer","type":"address"},{"internalType":"uint256","name":"_landID","type":"uint256"}],"name":"transferLand","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"__lanidlist","outputs":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"string","name":"location","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"landID","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"__nooflands","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_ownerlands","outputs":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"string","name":"location","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"landID","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNoOfLands","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_landHolder","type":"address"}],"name":"getNoOfLands_owner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"returnLand","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_landHolder","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"returnLand_owner","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totallandsCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
//contract instance
//contract = new web3.eth.Contract(abi, contractAddress);

const contract_address = "0x6D74Eb56D3f40d60dFdD10325FeF7D9A29F6604f";
 /*We will need the contract's address.*/
//const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"_landID","type":"uint256"}],"name":"Register","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_landSeller","type":"address"},{"internalType":"uint256","name":"_landID","type":"uint256"}],"name":"getLand","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_location","type":"string"},{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"registerLand","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_landBuyer","type":"address"},{"internalType":"uint256","name":"_landID","type":"uint256"}],"name":"transferLand","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"__lanidlist","outputs":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"string","name":"location","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"landID","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"__nooflands","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_ownerlands","outputs":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"string","name":"location","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"landID","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNoOfLands","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_landHolder","type":"address"}],"name":"getNoOfLands_owner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"returnLand","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_landHolder","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"returnLand_owner","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totallandsCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"} ];
/*IMPORTANT*/
/*ABI for the compiled code copy it and paste it in const abi*/
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
// Accounts
var account;


web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
        alert("Error retrieving accounts.");
        return;
    }
    if (accounts.length == 0) {
        alert("No account found! Make sure the Ethereum client is configured properly.");
        return;
    }
    account = accounts[0];
    console.log('Account: ' + account);
    web3.eth.defaultAccount = account;
});
var Contract = web3.eth.contract(abi).at(contract_address);
console.log(Contract);

//Smart contract functions

$('#custome-btn').click(()=>{

     
    console.log($("#txt_location").val()+parseInt($("#txt_cost").val()));
    Contract.registerLand.sendTransaction($("#txt_location").val(),parseInt($("#txt_cost").val()),(result,error)=>{console.log(error)});
       /*.sendTransaction(location,cost
            ,{from: web3.eth.defaultAccount , value:235254}, function(error, transactionHash){
            	if (!error) { console.log(transactionHash);} else {console.log(error);}});
            });*/
/*function registerSetInfo() {
    info = $("#newInfo").val();
    contract.methods.setInfo(info).send({ from: account }).then(function (tx) {
        console.log("Transaction: ", tx);
    });
    $("#newInfo").val('');*/
});

/*function registerGetInfo() {
    contract.methods.getInfo().call().then(function (info) {
        console.log("info: ", info);
        document.getElementById('lastInfo').innerHTML = info;
    });
}*/
function goBack() {
    window.history.back();
}
