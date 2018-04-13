var express = require('express');
var router = express.Router();
var rek = require('rekuire'),

    Web3 = require('web3');

Rider = rek("Rider");
//var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  
var wallet;
router.get('/light',(req,res)=>{
    // web3.eth.getCoinbase().then((address)=>{
    //     return web3.eth.getBalance("0x8F619572f50a5f49AD72e43983F9eF87d6C9064e")
    // }).then((balance)=> res.send(balance))
    //res.send('light')
    var {privateKey,acc} = {"privateKey" : "0x5ac3057cff42f4f568ed4047921149b171cd6f29d87a9800e59ae84d812a5db7", 
"acc" : "0x8F619572f50a5f49AD72e43983F9eF87d6C9064e" }
var to="0xe97F7F6C5Cc08ff2094d57aee60051F2377CC126";
var sendtx={};
sendtx.from=acc;
sendtx.to=to;
sendtx.value="5000";
sendtx.gas="2000000"; 
        console.log("from acc1 to acc2");
     web3.eth.accounts.signTransaction(sendtx, privateKey).then(tx=>res.send(tx));

});

router.get("/addy1", (req,res)=>{
var {privateKey,acc} = {"privateKey" : "0x5ac3057cff42f4f568ed4047921149b171cd6f29d87a9800e59ae84d812a5db7", 
"acc" : "0x8F619572f50a5f49AD72e43983F9eF87d6C9064e" }

web3.eth.getBalance(acc).then(balance=>res.send(balance));

})

router.get("/addy2", (req,res)=>{
    var {privateKey,acc} = {"privateKey" : "0x0614c2c193d471a9dd67dab20e62c1095ab3c6492caff7daf26a0f6faaf55a68", 
    "acc" : "0xe97F7F6C5Cc08ff2094d57aee60051F2377CC126" }
    web3.eth.getBalance(acc).then(balance=>res.send(balance));

    })


/* GET home page. */
router.get('/',(req, res)=>{
    //var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
 
    wallet = web3.eth.accounts.wallet.create(1 );
    // var acc= web3.eth.accounts.create();
    // console.log(acc)
    // web3.eth.personal.newAccount('!@superpassword')
//.then(console.log);
    console.log(wallet)
    // res.send(account2)npm
    res.send("transaction")
});

module.exports = router;