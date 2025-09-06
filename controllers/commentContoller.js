const Comment = require("../models/Comment");

exports.createComment = async (req,res,next) =>{
    try {
        const {postId} = req.params;
        const{text,author} = req.body;

        const comment = await Comment.create({
            text,
            author,
            post:postId
        });
        res.status(201).json(comment);
    } catch (error) {
        next(error)
    }
};