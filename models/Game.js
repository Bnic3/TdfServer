var rek = require("rekuire"),
    mongoose = rek("database"),

    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

    var GameSchema = new Schema({
        
        gid: {type:Number,required: true, unique:true},
        loot:{type: Number, default:0 },
        own_team:{type: Schema.Types.ObjectId, ref: 'Team'},
        away_team:{type: Schema.Types.ObjectId, ref: 'Team'},
        winner: {type: Schema.Types.ObjectId, ref: 'Team'}

    });
  
    GameSchema.plugin(autoIncrement.plugin,{
        model:"Game",
        field:'gid',
        startAt:1,
        incrementBy:1});
 
    module.exports = mongoose.model('Game', GameSchema);