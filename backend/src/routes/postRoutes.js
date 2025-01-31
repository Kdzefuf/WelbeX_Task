const express = require('express');
const { createPost, getAllPosts, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();

router.post('/posts', createPost);
router.get('/posts', getAllPosts);
router.delete('/posts/:id', deletePost);

module.exports = router;