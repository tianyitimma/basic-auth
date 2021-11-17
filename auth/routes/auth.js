'use strict';

const express = require('express');
const router = express.Router();
const {users} = require('../../model/index');
const basicAuth = require('../middleware/basicAuth');

router.post('/signup', async (req, res) => {
  try {
    //req.body.password = await bcrypt.hash(req.body.password, 10);
    const newUser = await users.create(req.body);
    res.status(201).send(newUser);
  } catch (e) { res.status(403).send("Error Creating User"); }
});


router.post('/signin', basicAuth, (req, res) => {
  res.status(200).send('signed in');
});


module.exports = router;
