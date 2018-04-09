var _ = require("lodash"),
    rek = require('rekuire'),
    jwt = require('jsonwebtoken'),
    {firebase}= rek("FBdatabase"),
    Broker = rek('Broker');

var {signTransaction,
    createAccount,
    transfer,
    commissioner,
    getBalance}= Broker();

var userCtrl = function(User,Team, Challenge){

    var createUser= function(req, res){
        var input = req.body;
        
        var user = new User();
        user = _.merge(user, input);

        var ref = firebase.database().ref('users');
        var key = ref.push({"uname": user.username,"bal": ""}).getKey();

        //@returns acct{address,privateKey, signTransaction,sign,encrypt}
        var {address,privateKey}=createAccount();

        transfer(commissioner,address,'10000');
        getBalance(address)
        .then(balance=>{
            user.acc_bal= balance;
            user.acc= address;
            user.privateKey=privateKey;
            user.firebase_token=key;
            return user.save()

        })
        .then(doc=>{
            console.log(doc)
            return res.status(200).send({
                success: true,
                message: 'user has been created',
                notification: 'success'

            }); //end return
        })
        .catch(function (err) {
            if (err.code === 11000) {
                return res.status(401).send({
                    success: false,
                    message: 'user already exists',
                    error: err,
                    notification: 'error'

                });
            } //endIf
            return res.status(401).send({
                success: false,
                error: err,
                notification: 'error'

            });
        }); //end catch chain


    }

    var authenticateUser = (req,res)=>{
       var {username, password} = req.body;

       var query = User.findOne({username:username.toLowerCase(),password}).exec()
       .then(user=>{
        var payload = user    
        var token = jwt.sign(payload, "superSecret", {
            expiresIn: "2 days" // expires in 2 days
          });

          res.json({
            success: true,
            message: 'logged in successfully!',
            token: token,
            user
          });
          // do not send user obj in production!!!
       })
       .catch(function(err) {
           console.log(err)
        return res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    });
    }

    var getUserTeams = (req,res)=>{
        var {uid} = req.params;
        var query = Team.find({uid});
        query.exec()
            .then((teams)=>{
                return res.json(teams);
                }
            )

            .catch(function(err) {
                return res.status(403).send({
                    success: false,
                    message: 'An error occured getting teams.',
                    error: err
                });
            });
        
    }//end get user team


    var getAllTeams = (req,res)=>{
        
        var query = Team.find({});
        query.exec()
            .then((teams)=>{
                return res.json(teams);
                }
            )

            .catch(function(err) {
                return res.status(403).send({
                    success: false,
                    message: 'An error occured getting teams.',
                    error: err
                });
            });
        
    } //end get all teams


    var getTeam = (req,res)=>{
        var {tid} = req.params;
        var query = Team.findOne({tid});
        query.exec()
            .then((team)=>{
                return res.json(team);
                }
            )

            .catch(function(err) {
                return res.status(403).send({
                    success: false,
                    message: 'An error occured getting teams.',
                    error: err
                });
            });
        
    }// en get team

    var createTeam = (req,res)=>{
        var input = req.body;
        var team = new Team();
        team = _.merge(team, input);

        team.save()
        .then(team=>{
               console.log("team created");
               return res.status(200).send({
                success: true,
                message: 'team has been created',
                notification: 'success'

            }); //end return

        })
        .catch(err=>{
            return res.status(401).send({
                success: false,
                error: err,
                notification: 'error'

            }); 
        })

    } //end create team

    var deleteTeam = (req, res)=>{
        var input = req.body;
        var id = input._id;

       
        var query = Team.remove({_id : id});
        query.exec()
        .then(doc=>{
            console.log(`team with id ${id} has been deleted`)
            return res.status(200).send({
                success: true,
                message: 'team has been deleted',
                notification: 'success'

            }); //end return
        })
        .catch(err=>{
            console.log(err);
            return res.status(400).send({
                success: true,
                message: 'something went wrong',
                notification: 'success'

            }); //end return
        })

    }//end delete team


    var createChallenge= (req,res)=>{
        var input = req.body;

        var challenge = new Challenge();
        challenge = _.merge(challenge, input);

        challenge.save()
        .then(doc=>{
            console.log("challenge created");
            return res.status(200).send({
                success: true,
                message: 'your challenge has been created',
                notification: 'success'
            });
    })
        .catch(err=>{
            return res.status(200).send({
                success: true,
                message: 'team has been deleted',
                notification: 'success'

            }); //end return
        });//


    }; //end create challenge 


    var deleteChallenge = (req, res)=>{
        
        var {cid} = req.params;

       
        var query = Challenge.remove({cid : cid});
        query.exec()
        .then(doc=>{
            console.log(`challenge with id ${cid} has been deleted`)
            return res.status(200).send({
                success: true,
                message: 'challenge has been deleted',
                notification: 'success'

            }); //end return
        })
        .catch(err=>{
            console.log(err);
            return res.status(400).send({
                success: true,
                message: 'something went wrong',
                notification: 'success'

            }); //end return
        })

    }//end delete team


    return {
        createUser,
        authenticateUser,
        getUserTeams,
        getTeam,
        getAllTeams,
        createTeam,
        deleteTeam,
        createChallenge,
        deleteChallenge

    }
}

module.exports = userCtrl