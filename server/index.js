const express = require('express');
const models = require('./model.js');
// const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use('/', express.static(`${__dirname}/../public`));
app.use('/listing/:listingId', express.static(`/${__dirname}/../public`));

app.use(bodyParser.json());

app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});

// app.get('*/bundle.js', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../public/bundle.js'));
// });

app.get('/reviews/:listingId', (req, res) => {
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
  }, req.params.listingId);
});

app.post('/reviews/:listingId', (req, res) => {
  let aggregateObject = {
    houseId: req.params.listingId,
    reviewTitle: req.body.reviewTitle,
    reviewText: req.body.reviewText,
    reviewDate: req.body.reviewDate
  };

  models.reviews.postReviews((err, results) => {
    if (err) {
      res.status(500).send('unable to save to database', err);
    } else {
      res.status(200).send('item saved to database');
    }
  }, aggregateObject);

});

app.put('/reviews/:listingId', (req, res) => {
  let aggregateObject = {
    reviewText: req.body.reviewText,
  };
  models.reviews.updateReviews((err, results) => {
    if (err) {
      res.status(500).send('unable to save changes to database', err);
    } else {
      res.status(200).send('changes saved to database');
    }
  }, req.body._id, aggregateObject);
});

const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


















