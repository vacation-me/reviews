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
    // this sums the values for each categories
    for (let review of reviews) {
      for (let key in aggregateObject) {
        aggregateObject[key] = aggregateObject[key] + review[0].rating[key];
      }
    }
    // this section calculates average score for each category
    for (let key in aggregateObject) {
      aggregateObject[key] = aggregateObject[key] / reviews.length;
    }
    // the aggregateObject is added to the reviews array
    reviews.push(aggregateObject);
    res.send(reviews);
  }, req.params.id);
});

const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));