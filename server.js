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
// app.use(express.static("public"));

// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/index.html"))
// );
app.get("/api/recipes", function (req, res) {
  res.sendFile(path.join(__dirname, "data.json"));
});
//use api from ./routes
// app.use(routes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT} `);
});
