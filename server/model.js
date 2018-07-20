const mongoose = require('mongoose');
const db = require('./database/index');
mongoose.connect('mongodb://localhost/fec');

db.Review.find({}, null, function (err, review) {
  if (err) {
    console.log('error in model');
  }
  console.log(review);
});

