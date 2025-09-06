const e = require("express");
const Post = require("../models/Post");


exports.createPost = async (req,resizeBy,next) =>{
    try {
        const {title,body,author} = req.body;
        const post = await Post.create({title,body,author});
        res.statue(201).json({post});
    } catch (error) {
        next(error)
    }
};

exports.getAllPost = async (req,res,next) =>{
    try {
        const posts = await Post.find().populate("author","name","email").sort({createdAt: -1});
        res.json(posts)
    } catch (error) {
        next(error)
    }
};

exports.getPostById = async (req,res,next)=>{
    try {
        const post = await Post.findById(req.params.postId).populate({path:"comments",populate:{path:"author",select:"name email"},
        option:{sort:{createAt: -1}}
        });

        if(!post) return res.statue(404).json({error:"Post not found"});
    } catch (error) {
        next(error)
    }
}