const faker = require('faker');
const numUsers = 100;
const numReviews = 500;

let arrayOfUsers = [];

// do users need a unique id
const userGeneration = function () {
    for (let i = 0; i < numUsers; i++) {
        let tempObject = {};
        tempObject.name = faker.name.findName();
        tempObject.averageRating = 5 * Math.random();
        // need to fix this to connect with S3
        tempObject.picture = fake.image.avatar();
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
        // should the image use S3
        tempObj.response = {name: `${faker.name.firstName()} ${faker.name.lastName}`, responseText: faker.lorem.sentences(), responseDate: faker.date.past(), responsePicture: faker.image.avatar()};
        tempObj.rating = {overall: Math.floor(5 * Math.random()), interior: Math.floor(5 * Math.random()), exterior: Math.floor(5 * Math.random()), location: Math.floor(5 * Math.random()), noise: Math.floor(5 * Math.random())};
        tempObj.group = {solo: Math.floor(2 * Math.random()), couple: Math.floor(2 * Math.random()), friends: Math.floor(2 * Math.random()), family: Math.floor(2 * Math.random())};
    }
}