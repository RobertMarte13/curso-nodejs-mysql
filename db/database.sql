CREATE DATABASE IF NOT EXISTS companydb;

-- Antes de crear una tabla debemos hacerder a la base de datos con use y el nombre de la base de datos.

USE companydb;

-- Creando una tabla.

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id) 
);

DESCRIBE employee;

INSERT INTO employee (name, salary) VALUES 
  ("Robert", 3000),
  ("John", 4000),
  ("Mary", 5000);