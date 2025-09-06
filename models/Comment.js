const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"User",rquired:true},
    post:{type: mongoose.Schema.Types.ObjectId,ref:"Post",required:true},
    createdAt:{type:Date,defalut:Date.now}
});


module.exports = mongoose.model("Comment",commentSchema);