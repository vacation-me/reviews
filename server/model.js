const db = require('../database/index');

module.exports = {
  reviews: {
    getReviews: function (cb) {
      db.Review.find({}, null, function (err, reviews) {
        if (err) {
          console.log('error in model');
        }
        cb(reviews);
      });
    }
  }
};


