var express = require('express');
var router = express.Router();
var rek = require('rekuire')

var fb= rek('FBdatabase') 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/testfb', (req, res)=>{
  fb.database().ref().set({
    "name": "my Tdf app"
  })
res.send("posting to fb")

}) 
module.exports = router;
