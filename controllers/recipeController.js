const path = require("path");
const fs = require("fs");

module.exports = {
  findAll: async function (req, res) {
    console.log("hello");
    try {
      res.sendFile(path.join(__dirname, "data.json"));
    } catch (err) {
      res.status(404).json(err);
    }
  },
};
