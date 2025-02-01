const express = require('express');
const { createPost, getAllPosts, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});
  
const upload = multer({ storage });

router.post('/posts', upload.single('file'), createPost);
router.get('/posts', getAllPosts);
router.put('/posts/:id', upload.single('file'), updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;