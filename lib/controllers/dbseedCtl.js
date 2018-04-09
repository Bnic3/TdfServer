var _ = require("lodash"),        
        rek = require("rekuire"),
        fs= require('fs'),
        {firebase}= rek("FBdatabase"),
        Schema= require("mongoose").Schema;

 var dbSeed = function(Rider){

        var riderJson= (req, res)=>{
                console.log("starting to read json file..");
                var contents= fs.readFileSync("data/final_list.json") ;
                var jsonContent = JSON.parse(contents);
                var data = jsonContent.data.map(x=> JSON.parse(x))
                var ref = firebase.database().ref('riders') 
                data.forEach(element => {
                        //Todo: save to fb, retrieve key then save to mongodb
                        var riderName = `${element.first_name} ${element.last_name}`
                        var key = ref.push({"bib": element.bib,
                        "name":riderName ,
                        "dtf": "",}).getKey();

                        var rider = new Rider();
                        rider = _.merge(rider,element);
                        rider.firebase_token= key;
                        rider.save()
                        .then((doc)=> console.log(`${riderName} was saved successfully`))
                        .catch((e)=> console.log(e))
                });
                
                res.send("data has been saved");

        } 
         
        return {riderJson};

 }

 module.exports= dbSeed;