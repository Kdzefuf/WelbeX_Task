const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('users', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  email: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: false 
  },
  username: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  password: { 
    type: DataTypes.STRING, 
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

module.exports = User;