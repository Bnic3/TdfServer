var rek = require("rekuire"),
    mongoose = rek("database"),

    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

    var RiderSchema = new Schema({
        rid: {type:Number,required: true, unique:true},
        team: String,
        bib:String,
        first_name: String,
        lastname_name: String,
        stats_url: String,
        img: String,
        dobd: String,
        doby: String,
        country: String,
        weight: String,
        height: String,
        pcs_rank: String,
        uci_rank: String,
        pbs_day: String,
        pbs_gc: String,
        pbs_tt: String,
        pbs_sprint: String,
        
       
        firebase_token:{type:String, default: "" }
    
    });
  
    RiderSchema.plugin(autoIncrement.plugin,{
        model:"Rider",
        field:'rid',
        startAt:1,
        incrementBy:1});
    // namedtuple('Rider_stat',
    //    'team, bib, first_name, last_name, 
    // stats_url, img, dobd, doby, country, weight, height,pcs_rank, uci_rank,pbs_day,pbs_gc, pbs_tt,pbs_sprint')

    
    
    module.exports = mongoose.model('Rider', RiderSchema);
    