const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('posts', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  title: {
    type: DataTypes.STRING, 
    allowNull: false 
  },
  content: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  file: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  userId: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now(),
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  }
});

module.exports = Post;