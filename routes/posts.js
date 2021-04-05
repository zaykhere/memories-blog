const express = require('express');
const router= express.Router();
const {getPosts,createPost,updatePost,deletePost,likePost} = require("../controllers/posts.js");

router.get('/', getPosts);
router.post('/', createPost );
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/:id/likepost', likePost);

module.exports = router;
