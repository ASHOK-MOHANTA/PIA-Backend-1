const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String,requred:true,minlength:2},
    email:{type:String,required:true,unique:true,},
    bio : {type:String, defalut:""},
    createdAt:{type:Date,default:Date.now}
});

module.exports = mongoose.model("User",userSchema);