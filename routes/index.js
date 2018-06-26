var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test-login', (req,res)=> {
  var {username, password} = req.body;
  console.log(`${username}, ${password}`)

  if(username =="react" && password =="password"){
    var token = jwt.sign({username,password,id:"001"}, "mysupersecret");
    res.json({
      success: true,
      message: 'logged in successfully!',
      token: token
    }); 
  } 
  else{
    //Todo: send a 401 
    res.status(401).json({success: false,
      message: 'login failed!'})
  } 
    
  

}); 

router.get('test-headers', (req,res)=>{
  res.send("testing headers");
})

module.exports = router;


// .then(
//   (response)=>{
//       console.log("i am in login promise")
//     let token = response.data.token
//     localStorage.setItem("authtoken",token );
//     SetAuthToken(token);
//     const decoded = jwtDecode(token);
//     console.log(`${decoded.id}`)
//     return true
           
// },
//   (failure)=>{ this.toggleState();console.log("501 intrenal error" )}
//   )
//   .catch(e=>{console.log(e)});   