const express = require("express");

const workerController = require('../controllers/workerController');

const routes = express.Router();

routes.get("/worker", workerController.listWorkers);
routes.get("/worker/:id", workerController.getWorker);
routes.post("/worker",  workerController.createWorker);
routes.put("/worker/:id", workerController.updateWorker);
routes.delete("/woker/:id", workerController.deleteWorker);

module.exports = routes;