const faker = require('faker');
const db = require('./database/reviews');

const numUsers = 100;
const numReviews = 500;

const avatarURLs = ['https://s3-us-west-1.amazonaws.com/fec-reviews/1.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/2.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/3.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/4.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/5.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/6.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/7.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/8.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/9.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/10.jpg'];

let users = [];

const generateRandomNumber = function (lowerLimit, upperLimit) {
    return lowerLimit + Math.floor(upperLimit * Math.random());
}

const generateUsers = function () {
    for (let i = 0; i < numUsers; i++) {
        let user = {};
        user.userId = i;
        user.name = faker.name.findName();
        user.avgRating = generateRandomNumber(1, 5);
        user.picture = avatarURLs[generateRandomNumber(0, avatarURLs.length)];
        users.push(user);
    }
}

let reviews = [];

const generateReviews = function () {
    for (let i = 0; i < numReviews; i++) {
        let review = {};
        review.houseId = generateRandomNumber(numUsers);
        review.reviewTitle = faker.lorem.sentence();
        review.reviewText = faker.lorem.paragraph();
        review.reviewDate = faker.date.past();
        review.helpfulCount = generateRandomNumber(1, 10);
        review.reportedCount = {inappropriate: generateRandomNumber(1, 10), hateful: generateRandomNumber(1, 10), fake: generateRandomNumber(1, 10)}
        review.response = {name: faker.name.findName(), responseText: faker.lorem.sentences(), responseDate: faker.date.past(), responsePicture: avatarURLs[generateRandomNumber(0, avatarURLs.length)]};
        review.rating = {overall: generateRandomNumber(1, 5), interior: generateRandomNumber(1, 5), exterior: generateRandomNumber(1, 5), location: generateRandomNumber(1, 5), noise: generateRandomNumber(1, 5)};
        // 1 is solo, 2 is group, 3 is couple, 4 is family - acts like a boolean signifying that type of guest stayed
        review.group = generateRandomNumber(1, 4);
        review.user = generateRandomNumber(0, 100);
        reviews.push(review);
    }
}

generateUsers();

const populateUsers = function () {
    db.User.insertMany(users, function (error, docs) {
        if (error) {
            console.log(error);
        }
        console.log(docs);
    });
}

populateUsers();

generateReviews();

const populateReviews = function () {
    db.Review.insertMany(reviews, function (error, docs) {
        if (error) {
            console.log(error);
        }
        console.log(docs);
    });
}

populateReviews();

//tell node to terminate 
// process.exit(-1);