'use strict';

// 3rd Party Resources
const express = require('express');
const authRoutes = require('./auth/routes/auth');
const { users } = require('./model');


// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.use(authRoutes);

module.exports = app;
