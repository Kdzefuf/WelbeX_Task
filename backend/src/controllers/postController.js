const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
  try {
    const { token, title, content } = req.body;
    const userId = parseToken(token);
    const post = await Post.create({
      title,
      content,
      userId,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({raw:true});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findOne({ where: { id: id } });
    if (!post) {
      return res.status(403).json({ message: 'Пост не существует.' });
    }
    await post.destroy();
    res.status(200).json({ message: 'Пост удален.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function parseToken(token) {
  const tokenParts = token.split('.');
  const decodedPayload = JSON.parse(atob(tokenParts[1])); 
  const userId = decodedPayload.userId;
  return userId;
}