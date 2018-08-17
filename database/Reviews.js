const db = require('./index');

const findReviews = (callback, id) => {
  db.query(`SELECT * from reviews WHERE houseId = ${id}`, (err, data) => {
  	if(err) {
  	  callback(err);
  	} else {
  	  callback(null, data);
  	}
  })
};

const postReview = (callback, context) => {
  db.query(`INSERT INTO reviews VALUES (${context.id}, ${context.houseId}, ${context.name}, ${context.picture}, ${context.reviewText}, ${context.reviewDate}, ${context.accuracyRating}, ${context.locationRating}, ${context.communicationRating}, ${context.checkinRating}, ${context.cleanlinessRating}, ${context.valueRating}, ${context.overallRating} `, (err, data) => {
  	if(err) {
      callback(err);
  	} else {
  	  callback(null, data);
  	}
  })
};


module.exports = {
  findReviews,
  postReview
}



  
