var express = require('express');
var router = express.Router();
var rek = require('rekuire'),

    Web3 = require('web3');

Rider = rek("Rider");
//var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  
var wallet;
router.get('/light',(req,res)=>{
    web3.eth.getCoinbase().then((address)=>{
        return web3.eth.getBalance("0x8F619572f50a5f49AD72e43983F9eF87d6C9064e")
    }).then((balance)=> res.send(balance))
    //res.send('light')
});


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