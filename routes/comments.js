const express =require("express");
const router = express.Router({mergeParams:true});

const commentController = require("../controllers/commentContoller");

router.post("/:postId",commentController.createComment);

module.exports = router;