const db = require('./index');

const findReviews = (callback, id) => {
  db.query(`SELECT * from reviews WHERE houseId = ${id}`, (err, data) => {
  	if(err) {
  	  callback(err);
  	} else {
  	  callback(null, data);
  	}
  })
};


module.exports = {
  findReviews
}