const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId},
    createdAt:{type:Date,default:Date.now},
    {
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
    }
});

postSchema.virtual("comments",{
    ref:"Comment",
    localField:"_id",
    foreignField:"post"
});

module.exports = mongoose.model("Post",postSchema);