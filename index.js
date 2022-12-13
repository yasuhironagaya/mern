//index.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json("こんにちは");
});

// ITEM functions

// USER functions

app.listen(5000, () => {
  console.log("Listening on localhost port 5000");
});
