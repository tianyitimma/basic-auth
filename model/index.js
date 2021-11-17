'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const usersModel = require('./users');

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const sequelize = new Sequelize(DATABASE_URL);
const usersTable = usersModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: usersTable,
};

