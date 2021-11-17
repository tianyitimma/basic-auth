'use strict';

const express = require('express');
const router = express.Router();
const validator = require('../middleware/basicAuth');

router.post('/signin', validator, async (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;