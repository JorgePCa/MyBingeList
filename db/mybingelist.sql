CREATE TABLE users
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    mail VARCHAR(255),
    birth_date DATE,
    password STRING,
);

ALTER TABLE users
ADD UNIQUE (id,name,mail);

CREATE TABLE status
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    definition VARCHAR(255),
    designation VARCHAR5(255),
);

ALTER TABLE status
ADD UNIQUE (def,designation)

CREATE TABLE type
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    definition VARCHAR(255),
    designation VARCHAR5(255),
);

ALTER TABLE type
ADD UNIQUE (def,designation)

CREATE TABLE categories
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    definition VARCHAR(255),
    designation VARCHAR5(255),
);

ALTER TABLE categories
ADD UNIQUE (def,designation)

CREATE TABLE media
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fk_type INT, 
);