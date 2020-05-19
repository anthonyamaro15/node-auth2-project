const express = require("express");
const authRoute = require("../authRoutes/authUsers");
const userRoute = require("../routes/userRoute");

const server = express();

server.use(express.json());
server.use("/api/auth", authRoute);
server.use("/api/users", userRoute);

module.exports = server;
