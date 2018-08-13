-- connect to cassandra by typing 'cqlsh' on terminal
-- source 'database/schema.cql'

DROP KEYSPACE IF EXISTS reviews_db;

CREATE KEYSPACE reviews_db WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE reviews_db;

CREATE TABLE reviews(
id INT,
houseId INT, 
name TEXT,
picture TEXT,
reviewText TEXT,
reviewDate TEXT,
accuracyRating INT,
locationRating INT,
communicationRating INT,
checkinRating INT,
cleanlinessRating INT,
valueRating INT,
overallRating DECIMAL,
PRIMARY KEY(id, houseId)
);

CREATE INDEX ON reviews (houseId);

COPY reviews (id, houseId, name, picture, reviewText, reviewDate, accuracyRating, locationRating, communicationRating, checkinRating, cleanlinessRating, valueRating, overallRating) FROM './database/data/reviews1.csv' WITH DELIMITER=',' AND HEADER=FALSE;
COPY reviews (id, houseId, name, picture, reviewText, reviewDate, accuracyRating, locationRating, communicationRating, checkinRating, cleanlinessRating, valueRating, overallRating) FROM './database/data/reviews2.csv' WITH DELIMITER=',' AND HEADER=FALSE;
COPY reviews (id, houseId, name, picture, reviewText, reviewDate, accuracyRating, locationRating, communicationRating, checkinRating, cleanlinessRating, valueRating, overallRating) FROM './database/data/reviews3.csv' WITH DELIMITER=',' AND HEADER=FALSE;
COPY reviews (id, houseId, name, picture, reviewText, reviewDate, accuracyRating, locationRating, communicationRating, checkinRating, cleanlinessRating, valueRating, overallRating) FROM './database/data/reviews4.csv' WITH DELIMITER=',' AND HEADER=FALSE;
COPY reviews (id, houseId, name, picture, reviewText, reviewDate, accuracyRating, locationRating, communicationRating, checkinRating, cleanlinessRating, valueRating, overallRating) FROM './database/data/reviews5.csv' WITH DELIMITER=',' AND HEADER=FALSE;
COPY reviews (id, houseId, name, picture, reviewText, reviewDate, accuracyRating, locationRating, communicationRating, checkinRating, cleanlinessRating, valueRating, overallRating) FROM './database/data/reviews6.csv' WITH DELIMITER=',' AND HEADER=FALSE;
COPY reviews (id, houseId, name, picture, reviewText, reviewDate, accuracyRating, locationRating, communicationRating, checkinRating, cleanlinessRating, valueRating, overallRating) FROM './database/data/reviews7.csv' WITH DELIMITER=',' AND HEADER=FALSE;
COPY reviews (id, houseId, name, picture, reviewText, reviewDate, accuracyRating, locationRating, communicationRating, checkinRating, cleanlinessRating, valueRating, overallRating) FROM './database/data/reviews8.csv' WITH DELIMITER=',' AND HEADER=FALSE;
COPY reviews (id, houseId, name, picture, reviewText, reviewDate, accuracyRating, locationRating, communicationRating, checkinRating, cleanlinessRating, valueRating, overallRating) FROM './database/data/reviews9.csv' WITH DELIMITER=',' AND HEADER=FALSE;
COPY reviews (id, houseId, name, picture, reviewText, reviewDate, accuracyRating, locationRating, communicationRating, checkinRating, cleanlinessRating, valueRating, overallRating) FROM './database/data/reviews10.csv' WITH DELIMITER=',' AND HEADER=FALSE;