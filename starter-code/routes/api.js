const express = require('express');
const router = express.Router();
const Places = require('../models/place');

router.get('/', (req, res, next) => {
  Places.find()
  .then(response => res.json(response))
  .catch(err => console.log(err))
})

module.exports = router;
