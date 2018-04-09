var rek = require("rekuire"),
    mongoose = rek("database"),

    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

    var ChallengeSchema = new Schema({
        
        cid: {type:Number,required: true, unique:true},
        stake:{type: Number, default:0 },
        own_team:{type: Schema.Types.ObjectId, ref: 'Team'},
        duration:Number

    });
  
    ChallengeSchema.plugin(autoIncrement.plugin,{
        model:"Challenge",
        field:'cid',
        startAt:1,
        incrementBy:1});
 
    module.exports = mongoose.model('Challenge', ChallengeSchema);