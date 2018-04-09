var _ = require("lodash"),
    rek = require('rekuire');

var riderCtrl = function(Rider){
    var getRiders= (req,res)=>{

        var query = Rider.find({});
        query.exec()
            .then((riders)=>{
                return res.json(riders);
                }
            )

            .catch(function(err) {
                return res.status(403).send({
                    success: false,
                    message: 'An error occured getting riders.',
                    error: err
                });
            });
    }// end get riders

    

    return {
        getRiders
    }
}

module.exports= riderCtrl;