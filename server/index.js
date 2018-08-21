require('dotenv').config();
require('newrelic');

const express = require('express');
const models = require('./model.js');
const Reviews = require('../database/Reviews.js');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const redisClient = require('./redis');

const app = express();

if(cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {

  app.use('/', express.static(`${__dirname}/../public`));
  // app.use('/listing/:listingId', express.static(`/${__dirname}/../public`));
  
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
  
  //this is the client url
  app.get('/listing/:listingId', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
  //Change the API url path... listings/:listingId/reviews
  app.get('/reviews/:listingId', (req, res) => {
    const id = Number(req.params.listingId);
    redisClient.get(`/reviews/${id}`, (err, results) => {
      if(err || !results) {
        // err ? console.log(err) : console.log('no data in redis. will scan postgresql');
        Reviews.findReviews((err, data) => {
          if(err) {
            res.status(500).send(err);
          } else {
            redisClient.set(`/reviews/${id}`, JSON.stringify(data.rows));
            res.status(200).send(data.rows);
          }
        }, id);
      } else {
        // console.log('found data in redis');
        res.send(results);
      }
    });
  });
  
  //redis throw error only if there is an internal error in redis
  
  app.post('/reviews/:listingId', (req, res) => { 
    let aggregateObject = {
      id: req.body.id,
      houseId: req.params.listingId,
      name: req.body.name,
      picture: req.body.picture,
      reviewText: req.body.reviewText,
      reviewDate: req.body.reviewDate,
      accuracyRating: req.body.accuracyRating,
      locationRating: req.body.locationRating,
      communicationRating: req.body.communicationRating,
      checkinRating: req.body.checkinRating,
      cleanlinessRating: req.body.cleanlinessRating,
      valueRating: req.body.valueRating,
      overallRating: req.body.overallRating
    }
    Reviews.postReview((err, results) => {
      if(err) {
        res.status(500).send(err);
      } else {
        console.log('New Review Posted');
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
  
  app.delete('/reviews/:listingId', (req, res) => {
    let reviewId = req.body._id;
  
    models.reviews.deleteReviews((err, results) => {
      if (err) {
        res.status(500).send('unable to delete review', err);
      } else {
        res.status(200).send('deleted the review');
      }
    }, reviewId);
  });
  
  const port = process.env.PORT || 3001;
  
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));

}

module.exports = app;
