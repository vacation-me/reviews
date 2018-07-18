const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// does mongoose allow trailing commas
const userSchema = new Schema ({
    name: String,
    // need to fix this to take a url from Amazon s3
    picture: String,
    avgRating: Number,
})

const reviewSchema = new Schema ({
    houseId = Number,
    reviewTitle = String,
    reviewText = String,
    reviewDate = Date,
    helpfulCount = Number,
    reportedCount = {inappropriate: Number, hateful: Number, fake: Number},
    // in a real backend this would reference user to get name and responsePicture
    response = {name: String, responseText: String, responseDate: Date, responsePicture},
    rating = {overall: Number, interior: Number, exterior: Number, location: Number, noise: Number},
    group: {solo: Boolean, couple: Boolean, friends: Boolean, family: Boolean},
    // need to fix to link to user table
    user: {},
})