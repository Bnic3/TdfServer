var Web3 = require('web3');

var Broker = function(nodeurl='http://localhost:8545'){
    var web3 = new Web3(new Web3.providers.HttpProvider(nodeurl));
    var name= 'john';

    //@params Number
    //@returns {Wallet<account> }
    var createWallet = function (numberOfAccount){
        return web3.eth.accounts.wallet.create(numberOfAccount);
    } 

    // @returns acct{address,privateKey, signTransaction,sign,encrypt}
    var createAccount= function(){
     return web3.eth.accounts.create();
     //return name
    }
   
    // @params {TxObject}
    // @returns {PromiseEvent<TransactionReceipt>}     
    var transfer = function({from,to,value }){
        web3.eth.sendTransaction({ from, to, value });

    }

    // @params String
    // @retuns {Promise<string>}
    var getBalance = function(address){
        return  web3.eth.getBalance(address)
    }

    var getCoinbase =function(){
        return web3.eth.getCoinbase()
    }


    return {
        createWallet,
        createAccount,
        transfer,
        getBalance,
        getCoinbase
    }

}

module.exports= Broker;