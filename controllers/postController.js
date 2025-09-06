const Post = require("../models/Post");


exports.createPost = async (req, res, next) => {
  try {
    const { title, body, author } = req.body;
    const post = await Post.create({ title, body, author });
    res.status(201).json(post); 
  } catch (error) {
    next(error);
  }
};


exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email") 
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    next(error);
  }
};


exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate({
        path: "comments",
        populate: { path: "author", select: "name email" },
        options: { sort: { createdAt: -1 } } 
      })
      .populate("author", "name email");

    if (!post) return res.status(404).json({ error: "Post not found" });

    res.json(post); 
  } catch (error) {
    next(error);
  }
};
