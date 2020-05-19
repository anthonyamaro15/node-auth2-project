const jwt = require("jsonwebtoken");

const secret = process.env.SECRET || "thisismysecret";

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, secret, (error, decotedToken) => {
      if (error) {
        res.status(401).json({ errorMessage: "Not allow" });
      } else {
        req.decotedToken = decotedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ errorMessage: "Invalid Credentials" });
  }
};
