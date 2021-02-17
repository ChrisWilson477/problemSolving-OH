CREATE DATABASE groceryList;

USE groceryList;

CREATE TABLE IF NOT EXISTS groceries (
  id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
  groceryItem varchar(25)
)