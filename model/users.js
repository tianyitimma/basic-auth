'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const SECRET = process.env.API_SECRET || 'testingsecret';

// Create a Sequelize model
const Users = (sequelize, DataTypes) => {
  let model = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({ username: this.username }, SECRET);
      }
    }
  });

  model.beforeCreate(async (user, options) => {
    let encryptedPass = await bcrypt.hash(user.password, 10);
    user.password = encryptedPass;
  });
  
  return model;
};

module.exports = Users;