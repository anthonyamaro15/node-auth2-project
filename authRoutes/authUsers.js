const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../schemas/user-model");
const { validateUser } = require("../restricted-middlewares/validate");

const secret = process.env.SECRET || "thisismysecret";

const route = express.Router();

// POST /api/auth/register
route.post("/register", (req, res) => {
  const user = req.body;

  if (validateUser(user) && user.department) {
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
    User.add(user)
      .then((us) => {
        res.status(201).json(us);
      })
      .catch((err) => {
        res.status(500).json({ errorMessage: "there was an error" });
      });
  } else {
    res
      .status(400)
      .json({ errorMessage: "Please provide username, password, department" });
  }
});

// POST /api/auth/login
route.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (validateUser(req.body)) {
    User.findBy({ username })
      .then(([user]) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = createToken(user);
          res.status(200).json({ username: user.username, token });
        } else {
          res.status(401).json({ errorMessage: "Invalid Credentials" });
        }
      })
      .catch((err) => {
        res.status(500).json({ errorMessage: "there was an error" });
      });
  } else {
    res.status(400).json({ errorMessage: "Please provide username, password" });
  }
});

function createToken(user) {
  const payload = {
    user: user.username,
    department: user.department,
  };
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, secret, options);
}

module.exports = route;
