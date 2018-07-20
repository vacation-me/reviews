const express = require('express');
const models = require('./model.js');
const app = express();


app.use(express.static('public'));

app.get('/reviews/:id', (req, res) => {
  // console.log(req.params.id);
  models.reviews.getReviews((reviews) => {
    // console.log(reviews);
    res.send(reviews);
  }, req.params.id);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));