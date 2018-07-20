const express = require('express');
const app = express();
const models = require('./model.js');


app.use(express.static('../client'));

app.get('/reviews', (req, res) => {
  models.reviews.getReviews((reviews) => {
    // console.log(reviews);
    res.send(reviews);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));