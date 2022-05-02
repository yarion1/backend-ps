const express = require("express");

const professionController = require("../controllers/professionController");

const routes = express.Router();

routes.get("/profession", professionController.listProfession);
routes.get("/profession/:id", professionController.getProfession);
routes.post("/profession",  professionController.createProfession);
routes.put("/profession/:id", professionController.updateProfession);
routes.delete("/profession/:id", professionsController.deleteProfession);

module.exports = routes;