const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");


router.post("/",postController.createPost);


router.get("/",postController.getAllPost);

router.get("/:postId",postController.getPostById);

module.exports = router;