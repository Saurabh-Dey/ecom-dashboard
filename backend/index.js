const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("app is working");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
