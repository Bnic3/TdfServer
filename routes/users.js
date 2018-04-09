var express = require('express');
var router = express.Router();
var rek = require('rekuire'),
    User = rek("User"),
    Team = rek("Team"), 
    Challenge = rek("Challenge"), 
    userCtrl=rek('userCtrl')(User,Team, Challenge); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create',userCtrl.createUser);
router.post('/login',userCtrl.authenticateUser);

router.post('/create/team',userCtrl.createTeam)
router.post('/delete/team',userCtrl.deleteTeam)



router.get('/teams:uid',userCtrl.getUserTeams);
router.get('/team:uid',userCtrl.getTeam);
router.get('/allteams',userCtrl.getAllTeams);


router.post('/create/challenge',userCtrl.createChallenge);
router.get('/delete/challenge/:cid',userCtrl.deleteChallenge);


 
module.exports = router;
