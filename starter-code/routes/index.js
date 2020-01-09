const express = require('express');
const router = express.Router();
const Places = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/:id/edit', (req, res, next) => {
  res.render('edit');
});

router.get('/add', (req, res, next) => {
  res.render('add');
});

router.post('/add', (req, res, next) => {
  const { name, type, latitude, longitude } = req.body;
  const location = {
    type: 'Point',
    coordinates: [longitude, latitude],
  };
  Places.create({
    name, type, location,
  })
    .then(e => console.log("uhuu ", e))
    .catch()
});



module.exports = router;
