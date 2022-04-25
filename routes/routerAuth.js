const express = require("express");

const authController = require("../controllers/authController");

const routes = express.Router();

routes.post("/login", authController.login);
routes.get("/register", authController.register);

module.exports = routes;