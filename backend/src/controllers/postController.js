const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
  try {
    const { token, title, content } = req.body;
    const { file } = req.file ? req.file : null;
    const userId = parseToken(token);
    const post = await Post.create({
      title,
      content,
      userId,
      file
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({raw:true});
    const sortedPosts = sortPosts(posts);
    res.status(200).json(sortedPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;
    const post = await Post.findOne({ where: { id: id } });
    if (!post) {
      return res.status(403).json({ message: 'Пост не существует.' });
    }
    await post.update({ title, content });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.addPostFile = async (id, postData) => {
  try {
    const post = await Post.findOne({ where: { id: id } });
    if (!post) {
      return res.status(403).json({ message: 'Пост не существует.' });
    }
    await post.update({ file: postData });
    res.status(200).json(post);
  } catch (err) {
    throw new Error('Error adding answer file: ' + err.message);
  }
}

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


function sortPosts(posts) {
  return posts.sort((a, b) => {
    if (a['updatedAt'] < b['updatedAt']) {
      return 1;
    }
    if (a['updatedAt'] > b['updatedAt']) {
      return -1;
    }
    return 0;
  });
}

function parseToken(token) {
  const tokenParts = token.split('.');
  const decodedPayload = JSON.parse(atob(tokenParts[1])); 
  const userId = decodedPayload.userId;
  return userId;
}