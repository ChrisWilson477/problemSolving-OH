CREATE DATABASE grocerylist;

USE grocerylist;

CREATE TABLE IF NOT EXISTS groceries (
  id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
  groceryItem varchar(25)
)