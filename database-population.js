const faker = require('faker');

const numUsers = 100;
const numReviews = 500;

const arrayOfAvatarURLs = ['https://s3-us-west-1.amazonaws.com/fec-reviews/1.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/2.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/3.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/4.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/5.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/6.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/7.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/8.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/9.jpg', 'https://s3-us-west-1.amazonaws.com/fec-reviews/10.jpg'];

let arrayOfUsers = [];

// do users need a unique id
const userGeneration = function () {
    for (let i = 0; i < numUsers; i++) {
        let tempObject = {};
        tempObject.name = faker.name.findName();
        tempObject.averageRating = 5 * Math.random();
        // will break in the case where Math.random() returns 1 - not sure if - 0.01 will work
        tempObject.picture = arrayOfAvatarURLs[Math.floor((arrayOfAvatarURLs.length - 0.01) * Math.random())];
        arrayOfUsers.push(tempObject);
    }
}

let arrayOfReviews = [];

const reviewGeneration = function () {
    for (let i = 0; i < numReviews; i++) {
        let tempObject = {};
        tempObject.houseId = Math.floor(numReviews * Math.random());
        tempObject.reviewTitle = faker.lorem.sentence();
        tempObject.reviewText = faker.lorem.paragraph();
        tempObject.reviewDate = faker.date.past();
        tempObject.helpfulCount = Math.floor(10 * Math.random());
        tempObject.reportedCount = {inappropriate: Math.floor(10 * Math.random()), hateful: Math.floor(10 * Math.random()), fake: Math.floor(10 * Math.random())}
        tempObj.response = {name: `${faker.name.firstName()} ${faker.name.lastName}`, responseText: faker.lorem.sentences(), responseDate: faker.date.past(), responsePicture: arrayOfAvatarURLs[Math.floor((arrayOfAvatarURLs.length - 0.01) * Math.random())]};
        tempObj.rating = {overall: Math.floor(5 * Math.random()), interior: Math.floor(5 * Math.random()), exterior: Math.floor(5 * Math.random()), location: Math.floor(5 * Math.random()), noise: Math.floor(5 * Math.random())};
        tempObj.group = {solo: Math.floor(2 * Math.random()), couple: Math.floor(2 * Math.random()), friends: Math.floor(2 * Math.random()), family: Math.floor(2 * Math.random())};
        arrayOfReviews.push(tempObject);
    }
}