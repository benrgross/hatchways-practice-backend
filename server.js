// require dependencies express, path and fs
const express = require("express");
const path = require("path");
const routes = require("./routes");

//set up express on port 300
const app = express();
const PORT = 3000;

// set up data parsing with express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use api from ./routes
app.use("routes");

app.listen(PORT, () => {
  console.log(`server is running on ${PORT} `);
});
