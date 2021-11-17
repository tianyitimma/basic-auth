'use strict';

const express = require('express');
const router = express.Router();
const {Users} = require('../../model');

router.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});

module.exports = router;
