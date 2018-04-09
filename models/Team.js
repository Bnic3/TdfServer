var rek = require("rekuire"),
    mongoose = rek("database"),

    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

    var TeamSchema = new Schema({
        
        tid: {type:Number,required: true, unique:true},
        uid:Number,
        name: {type:String,lowercase:true, trim: true },
        riders:[{type: Schema.Types.ObjectId, ref: 'Rider'}],
        wins: {type:Number,default : 0}
  
    });
  
    TeamSchema.plugin(autoIncrement.plugin,{
        model:"Team",
        field:'tid',
        startAt:1,
        incrementBy:1});
 
    module.exports = mongoose.model('Team', TeamSchema);