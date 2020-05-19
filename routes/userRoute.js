const express = require("express");
const User = require("../schemas/user-model");

const route = express.Router();

// GET /api/users
route.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "there was an error" });
    });
});

module.exports = route;
