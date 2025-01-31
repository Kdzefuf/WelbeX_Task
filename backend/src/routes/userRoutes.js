const express = require('express');
const { register, login, getUserById, updateUser } = require('../controllers/userController');
const { updatePost } = require('../controllers/postController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users/:token', getUserById);
router.put('/users/:token', updateUser);

module.exports = router;