// require("dotenv");
const express = require("express");
const authRoute = require("../authRoutes/authUsers");
const userRoute = require("../routes/userRoute");

const restricted = require("../restricted-middlewares/restricted");

const server = express();

server.use(express.json());
server.use("/api/auth", authRoute);
server.use("/api/users", restricted, userRoute);
// server.use("/api/users", restricted, userRoute);

function department(dep) {
  return (req, res, next) => {
    if (
      req.decodedToken &&
      req.decodedToken &&
      req.decodedToken.toLowerCase() === dep
    ) {
      next();
    } else {
      res.status(500).json({ errorMessage: "not allow" });
    }
  };
}

module.exports = server;
