\c travelDB;

DROP TABLE IF EXISTS clients;

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
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);