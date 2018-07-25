const express = require('express');
const models = require('./model.js');
const app = express();


app.use(express.static('public'));

app.get('/reviews/:id', (req, res) => {
  let aggregateObject = {
    overall: 0,
    accuracy: 0,
    location: 0,
    communication: 0,
    checkIn: 0,
    cleanliness: 0,
    value: 0,
  };

  models.reviews.getReviews((reviews) => {
    let numReviews = 0;
    for (let review of reviews) {
      aggregateObject.overall = aggregateObject.overall + review[0].rating.overall;
      aggregateObject.accuracy = aggregateObject.accuracy + review[0].rating.accuracy;
      aggregateObject.location = aggregateObject.location + review[0].rating.location;
      aggregateObject.communication = aggregateObject.communication + review[0].rating.communication;
      aggregateObject.checkIn = aggregateObject.checkIn + review[0].rating.checkIn;
      aggregateObject.cleanliness = aggregateObject.cleanliness + review[0].rating.cleanliness;
      aggregateObject.value = aggregateObject.value + review[0].rating.value;
      numReviews += 1;
    }
    aggregateObject.overall = aggregateObject.overall / numReviews;
    aggregateObject.accuracy = aggregateObject.accuracy / numReviews;
    aggregateObject.location = aggregateObject.location / numReviews;
    aggregateObject.communication = aggregateObject.communication / numReviews;
    aggregateObject.checkIn = aggregateObject.checkIn / numReviews;
    aggregateObject.cleanliness = aggregateObject.cleanliness / numReviews;
    aggregateObject.value = aggregateObject.value / numReviews;
    console.log(aggregateObject);
    reviews.push(aggregateObject);
    res.send(reviews);
  }, req.params.id);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));