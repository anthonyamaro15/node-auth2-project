const express = require("express");
const User = require("../schemas/user-model");

const route = express.Router();

// GET /api/users
route.get("/", (req, res) => {
  const { department } = req.decodedToken;

  User.findByDepartment(department)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "there was an error" });
    });
});

module.exports = route;
