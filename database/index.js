const pg = require('pg');

const config = {
  user: '',
  database: 'reviews_db'
};

const pool = new pg.Pool(config);

pool.connect((err, client) => {
  if (err) {
    console.log('problem connecting to db');
  } else {
    console.log('connected to db');
  }
  client.release();
});

module.exports = pool;



