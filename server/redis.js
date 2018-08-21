const redis = require('redis');
const client = redis.createClient();

//on terminal: redis-server  to start the server first before connecting

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

module.exports = client;