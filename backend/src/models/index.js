const sequelize = require('../config/db');
const User = require('./userModel');
const Post = require('./postModel');

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Post };