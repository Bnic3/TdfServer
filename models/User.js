var rek = require("rekuire"),
    mongoose = rek("database"),

    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

    var UserSchema = new Schema({
        uid: {type:Number,required: true, unique:true},
        username: {type:String,lowercase:true, trim: true },
        password:String,
        admin: {type:Boolean, default: false },
        acc:String,
        privateKey:String,
        acc_bal:String,
        firebase_token:{type:String, default: "" }
  
    });
  
    UserSchema.plugin(autoIncrement.plugin,{
        model:"User",
        field:'uid',
        startAt:1,
        incrementBy:1});
 
    module.exports = mongoose.model('User', UserSchema);