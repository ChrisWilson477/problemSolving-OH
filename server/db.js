var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "HackReactor10!!",
  database: 'groceryList'
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const getAllItems = (cb) => {
  con.query('SELECT * FROM groceries', (err, results) => {
    if(err){
      cb(err)
    } else {
      cb(null, results);
    }
  })
}

const insertItems = (groceryItem, cb) => {
  let item = groceryItem.groceryItem
  con.query('INSERT INTO groceries (groceryItem) VALUES (?)', item, (err, results) => {
    if(err){
      cb(err)
    } else {
      cb(null, results);
    }
  })
}

module.exports = {
  getAllItems,
  insertItems
};
