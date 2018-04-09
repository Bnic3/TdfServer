var {expect} = require('chai');
var Broker = require("../lib/Broker.js")

var {
    createWallet,
    createAccount,
    transfer,
    getBalance,
    getCoinbase}=Broker();
    
var address1,
    address2,
    coinbaseAddress;



before((done)=>{
    var accounts =  createWallet(2)
    address1= accounts[0].address;
    address2= accounts[1].address;
    getCoinbase().then((address)=> {coinbaseAddress=address;
        
    done()})
});



describe('Test Broker', ()=>{
    
    //console.log(createAccount())
    // var accounts = createAccount(2)
    // address1= accounts[0].address;
    // address2= accounts[1].address;
    // console.log(accounts)

    it("it should have a connected node", ()=>{
        console.log(coinbaseAddress)
        expect(1).to.equals(1)
    })



});