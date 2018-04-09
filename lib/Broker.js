var Web3 = require('web3');

var Broker = function(nodeurl='http://localhost:8545'){
    var web3 = new Web3(new Web3.providers.HttpProvider(nodeurl));
    var commissioner= '0xe76920246ab1e93114e05fdf66e7d185cfb08be6';

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
    var transfer = function(from,to,value ){
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



    

    // @retuns {Promise<txObject>}
    var signTransaction = function({from,value,to,gas=2000000},privateKey){
         
        return web3.eth.accounts.signTransaction({from,value,to,gas}, privateKey)
    } 


    return {
        createWallet,
        createAccount,
        transfer,
        getBalance,
        getCoinbase,
        signTransaction,
        commissioner
    }

}

module.exports= Broker;