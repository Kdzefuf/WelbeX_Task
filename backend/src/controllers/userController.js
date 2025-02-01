const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { console } = require('inspector');
require('dotenv').config();

exports.register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email: email, username: username, password: hashedPassword });
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    console.log(user);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Пароль или пользователь введены неправильно.' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.log("ksdkljlkfsjlkf");
    res.status(300).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const token = req.params.token;
    const userId = parseToken(token);
    const user = await User.findOne({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: 'Пользователь не найден.' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: req.params.token });
  }
}

exports.updateUser = async (req, res) => {
  try {
    const token = req.params.token;
    const userId = parseToken(token);
    const [ username, email, password ] = req.body;

    const user = await User.findOne({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: 'Пользователь не найден.' });

    const updatedUser = await user.update({ username: username, email: email, password: password }, { where: { id: userId } });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: req.body.username });
  }
}

function parseToken(token) {
  const tokenParts = token.split('.');
  const decodedPayload = JSON.parse(atob(tokenParts[1])); 
  const userId = decodedPayload.userId;
  return userId;
}