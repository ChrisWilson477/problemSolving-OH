const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const db = require("./db");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../dist")));

// get all items in DB

app.get("/api/groceries", (req, res) => {
  db.getAllItems((err, results) => {
    if(err){
      res.status(500).send(`There is an error in the GET request: ${err}`)
    } else {
      res.status(200).send(results)
    }
  })
});

// add item to DB

app.post("/api/groceries", (req, res) => {
  db.insertItems(req.body, (err, results) => {
    if(err){
      res.status(501).send(`There is an error in the GET request: ${err}`)
    } else {
      res.status(200).send(results)
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
