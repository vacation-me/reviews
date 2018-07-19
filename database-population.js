const faker = require('faker');
const db = require('./database/reviews');

const numUsers = 100;
const numReviews = 500;

const arrayOfAvatarURLs = ['https://s3-us-west-1.amazonaws.com/fec-reviews/1.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/2.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/3.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/4.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/5.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/6.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/7.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/8.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/9.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/10.jpg'];

let arrayOfUsers = [];

const generateRandomNumber = function (val) {
    return Math.ceil(val * Math.random());
}

const userGeneration = function () {
    for (let i = 0; i < numUsers; i++) {
        let tempObject = {};
        tempObject.userId = i;
        tempObject.name = faker.name.findName();
        tempObject.avgRating = generateRandomNumber(5);
        // will break in the case where Math.random() returns 1 - not sure if - 0.01 will work
        tempObject.picture = arrayOfAvatarURLs[Math.floor((arrayOfAvatarURLs.length - 0.01) * Math.random())];
        arrayOfUsers.push(tempObject);
    }
}

let arrayOfReviews = [];

const reviewGeneration = function () {
    for (let i = 0; i < numReviews; i++) {
        let tempObject = {};
        tempObject.houseId = generateRandomNumber(numUsers);
        tempObject.reviewTitle = faker.lorem.sentence();
        tempObject.reviewText = faker.lorem.paragraph();
        tempObject.reviewDate = faker.date.past();
        tempObject.helpfulCount = generateRandomNumber(10);
        tempObject.reportedCount = {inappropriate: generateRandomNumber(10), hateful: generateRandomNumber(10), fake: generateRandomNumber(10)}
        tempObject.response = {name: faker.name.findName(), responseText: faker.lorem.sentences(), responseDate: faker.date.past(), responsePicture: arrayOfAvatarURLs[Math.floor((arrayOfAvatarURLs.length - 0.01) * Math.random())]};
        tempObject.rating = {overall: generateRandomNumber(5), interior: generateRandomNumber(5), exterior: generateRandomNumber(5), location: generateRandomNumber(5), noise: generateRandomNumber(5)};
        // 1 is solo, 2 is group, 3 is couple, 4 is family
        tempObject.group = generateRandomNumber(4);
        tempObject.user = Math.floor(99 * Math.random());
        arrayOfReviews.push(tempObject);
    }
}

userGeneration();

console.log('Array of Users: ', arrayOfUsers);

const populateUsers = function () {
    db.User.insertMany(arrayOfUsers, function (error, docs) {
        if (error) console.log(error);
        console.log(docs);
    });
}

populateUsers();

reviewGeneration();

const populateReviews = function () {
    db.Review.insertMany(arrayOfReviews, function (error, docs) {
        if (error) console.log(error);
        console.log(docs);
    });
}

populateReviews();

//tell node to terminate 
// process.exit(-1);