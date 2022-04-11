const express = require("express");

const usersController = require("./controllers/usersController");

const routes = express.Router();

routes.get("/users", usersController.listUsers);
routes.get("/users/:id", usersController.getUser);
routes.post("/users",  usersController.createUser);
routes.put("/users/:id", usersController.updateUser);

module.exports = routes;