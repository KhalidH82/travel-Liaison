\c travelDB;

DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS typeofclient;
DROP TABLE IF EXISTS users;


CREATE TABLE clients (
	id  SERIAL PRIMARY KEY,
	fname VARCHAR(255),
	lname VARCHAR(255),
	sex VARCHAR(255),
	address VARCHAR(255),
	homephone VARCHAR(255),
	cellphone VARCHAR(255),
	email VARCHAR(255),
	dob VARCHAR(255),
	clienttag INT,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE typeofclient (
	typeid SERIAL PRIMARY KEY,
	type VARCHAR(255)
);

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(255) UNIQUE,
	password VARCHAR(255),
	hash VARCHAR(255),
	salt VARCHAR(255)
);



