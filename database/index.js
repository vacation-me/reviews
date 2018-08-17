// const mongoose = require('mongoose');
// const MONGO_URI = process.env.MONGO_URI || 'localhost';
// mongoose.connect(`mongodb://${MONGO_URI}/docker_test`);

// const Schema = mongoose.Schema;

// const userSchema = new Schema ({
//   userId: Number,
//   name: String,
//   picture: String,
//   avgRating: Number,
// });

// const reviewSchema = new Schema ({
//   houseId: Number,
//   reviewTitle: String,
//   reviewText: String,
//   reviewDate: Date,
//   helpfulCount: Number,
//   reportedCount: {inappropriate: Number, hateful: Number, fake: Number},
//   // in a real backend this would reference user to get name and responsePicture
//   response: {name: String, responseText: String, responseDate: Date, responsePicture: String},
//   rating: {overall: Number, accuracy: Number, location: Number, communication: Number, checkIn: Number, cleanliness: Number, value: Number},
//   group: Number,
//   // in the real world I would use the _id property on each document
//   user: Number,
// });

// const User = mongoose.model('User', userSchema);

// const Review = mongoose.model('Review', reviewSchema);

// module.exports = {
//   User,
//   Review,
// };


const pg = require('pg');

const config = {
  user: '',
  database: 'reviews_db'
};

const pool = new pg.Pool(config);

pool.connect((err) => {
  if (err) {
    console.log('problem connecting to db');
  } else {
    console.log('connected to db');
  }
});

module.exports = pool;



