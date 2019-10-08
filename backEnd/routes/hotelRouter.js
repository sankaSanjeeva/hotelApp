var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var hotel = require('../models/hotel.js');

/* GET ALL HOTELS */
router.get('/', function(req, res, next) {
  hotel.find(function (err, hotels) {
    if (err) return next(err);
    res.json(hotels);
  });
});

/* GET SINGLE HOTEL BY ID */
router.get('/:id', function(req, res, next) {
  hotel.findById(req.params.id, function (err, hotel) {
    if (err) return next(err);
    res.json(hotel);
  });
});

/* ADD HOTEL */
router.post('/', function(req, res, next) {
  hotel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE HOTEL */
router.put('/:id', function(req, res, next) {
  hotel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE HOTEL */
router.delete('/:id', function(req, res, next) {
  hotel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;