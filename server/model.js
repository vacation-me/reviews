const db = require('../database/index');
const _ = require('underscore');

module.exports = {
  reviews: {
    getReviews: function (cb) {
      // const reviews = [];
      // const combinedUsers = [];
      const promises = [];
      let combinedReview = [];
      db.Review.find({}, null).then((reviews) => {
        for (let review of reviews) {
          // console.log(combinedUsers); 
          // push something to promises
          // console.log(review);
          promises.push(db.User.findOne({userId: review.user}, null, function (err, user) {
            if (err) {
              return err;
            }
            // $.extend({}, object1, object2);
            console.log(review);
            // console.log(user);
            // console.log(_.extend(review, user));
            let combinedObject = [review, user];
            // let combinedObject = _.extend(review, user);
            // console.log(combinedObject);
            combinedReview.push(combinedObject); 
            // console.log('internal', combinedUsers);
          }));
        }
        // console.log(combinedUsers);
      }).then(() => {
        Promise.all(promises).then(() => {
          cb(combinedReview);
        });
      });

      // call Promise.all(promises).then()
    }
  }
};


