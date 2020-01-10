const express = require('express');
const Places = require('../models/place');

const router = express.Router();

router.get('/', (req, res) => {
  Places.find()
    .then((response) => res.json(response))
    .catch((err) => {
      throw new Error(err);
    });
});

module.exports = router;
