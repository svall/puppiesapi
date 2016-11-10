const db = require('../lib/dbConnect');

function getAllPuppies(req, res, next) {

  db.any('SELECT * from puppies;')
    .then((puppies) => {
      res.puppies = puppies;
      next();
    })
    .catch(error => next(error));
}

function adoptPuppy(req, res, next) {
  // Implement adopting a puppy
}

function abandonPuppy(req, res, next) {
  // Implement abandoning the puppy :(
}

function likePuppy(req, res, next) {
  // Implement increasing the likes value of the puppy by one
}

module.exports = {
  getAllPuppies,
  adoptPuppy,
  abandonPuppy,
  likePuppy
};
