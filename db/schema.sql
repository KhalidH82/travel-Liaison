\c travelDB;

DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS typeofclient;

CREATE TABLE clients (
	id  SERIAL PRIMARY KEY,
	fname VARCHAR(255),
	lname VARCHAR(255),
	sex VARCHAR(255),
	address VARCHAR(255),
	homephone BIGINT,
	cellphone BIGINT,
	email VARCHAR(255),
	dob VARCHAR(255),
	clienttag INT,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE typeofclient (
	typeid SERIAL PRIMARY KEY,
	type VARCHAR(255)
);