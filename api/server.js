require("dotenv");
const express = require("express");
const authRoute = require("../authRoutes/authUsers");
const userRoute = require("../routes/userRoute");

const restricted = require("../restricted-middlewares/restricted");

const server = express();

server.use(express.json());
server.use("/api/auth", authRoute);
server.use("/api/users", restricted, userRoute);

module.exports = server;
