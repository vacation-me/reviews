
/*  Execute this file from the command line by typing:
 *    psql postgres  // to connect to psql (current database would be postgres)
 *    \i database/schema.sql // to run this schema.sql file 
 */

DROP DATABASE IF EXISTS reviews_db;

CREATE DATABASE reviews_db; 

\c reviews_db;

CREATE TABLE reviews (
id INT PRIMARY KEY NOT NULL,
houseId INT NOT NULL, 
name VARCHAR(30) NOT NULL,
picture VARCHAR(55) NOT NULL,
reviewText TEXT NOT NULL,
reviewDate VARCHAR (15) NOT NULL,
accuracyRating INT NOT NULL,
locationRating INT NOT NULL,
communicationRating INT NOT NULL,
checkinRating INT NOT NULL,
cleanlinessRating INT NOT NULL,
valueRating INT NOT NULL,
overallRating DECIMAL NOT NULL

);

CREATE INDEX ON reviews (houseId);

\COPY reviews FROM './database/data/reviews1.csv' WITH (FORMAT csv);
\COPY reviews FROM './database/data/reviews2.csv' WITH (FORMAT csv);
\COPY reviews FROM './database/data/reviews3.csv' WITH (FORMAT csv);
\COPY reviews FROM './database/data/reviews4.csv' WITH (FORMAT csv);
\COPY reviews FROM './database/data/reviews5.csv' WITH (FORMAT csv);
\COPY reviews FROM './database/data/reviews6.csv' WITH (FORMAT csv);
\COPY reviews FROM './database/data/reviews7.csv' WITH (FORMAT csv);
\COPY reviews FROM './database/data/reviews8.csv' WITH (FORMAT csv);
\COPY reviews FROM './database/data/reviews9.csv' WITH (FORMAT csv);
\COPY reviews FROM './database/data/reviews10.csv' WITH (FORMAT csv);

