const express = require('express');
const router = express.Router();
const { getAllPuppies, adoptPuppy, abandonPuppy, likePuppy } = require('../../models/puppy');

// handle all the routes

// get all puppies
router.get('/', getAllPuppies, (req, res) => {
  res.json(res.puppies || []);
});

// Implement POST to adopt a puppy

// Implement PUT to like a puppy

// Implement DELETE to abandon a puppy :(

module.exports = router;
