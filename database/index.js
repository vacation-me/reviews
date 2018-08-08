const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/docker_test');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  userId: Number,
  name: String,
  picture: String,
  avgRating: Number,
});

const reviewSchema = new Schema ({
  houseId: Number,
  reviewTitle: String,
  reviewText: String,
  reviewDate: Date,
  helpfulCount: Number,
  reportedCount: {inappropriate: Number, hateful: Number, fake: Number},
  // in a real backend this would reference user to get name and responsePicture
  response: {name: String, responseText: String, responseDate: Date, responsePicture: String},
  rating: {overall: Number, accuracy: Number, location: Number, communication: Number, checkIn: Number, cleanliness: Number, value: Number},
  group: Number,
  // in the real world I would use the _id property on each document
  user: Number,
});

const User = mongoose.model('User', userSchema);

const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  User,
  Review,
};