const faker = require('faker');

const getRandomNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomDate = () => {
  const month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = ['2014', '2015', '2016', '2017', '2018'];

  return month[getRandomNumber(0, 12)] + ' ' + year[getRandomNumber(0, 5)];
};

const generateData = () => {
  let review = {};

  for (let i = 1; i < 2500001; i++) {
    review.id = i;
    review.houseId = getRandomNumber(1, 100);
    review.name = faker.name.findName();
    review.picture = `https://s3-us-west-1.amazonaws.com/fec-reviews/${getRandomNumber(1, 10)}.jpg`;
    review.reviewText = faker.lorem.paragraph();
    review.reviewDate = getRandomDate();
    review.accuracyRating = getRandomNumber(1, 5);
    review.locationRating = getRandomNumber(1, 5);
    review.communicationRating = getRandomNumber(1, 5);
    review.checkinRating = getRandomNumber(1, 5);
    review.cleanlinessRating = getRandomNumber(1, 5);
    review.valueRating = getRandomNumber(1, 5);
    review.overallRating = ((review.accuracyRating + review.locationRating + review.communicationRating + review.checkinRating + review.cleanlinessRating + review.valueRating) / 6).toFixed(2);    
  
    console.log(`${review.id}, ${review.houseId}, ${review.name}, ${review.picture}, ${review.reviewText}, ${review.reviewDate}, ${review.accuracyRating}, ${review.locationRating}, ${review.communicationRating}, ${review.checkinRating}, ${review.cleanlinessRating}, ${review.valueRating}, ${review.overallRating}`);
  }
};

generateData();