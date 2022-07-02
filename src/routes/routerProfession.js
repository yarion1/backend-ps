const { Router } = require("express");
const express = require("express");

const professionController = require("../controllers/professionController");

const routes = express.Router();

routes.get("/profession", professionController.listProfessions);
routes.get("/profession/:id", professionController.getProfession);
routes.post("/profession", professionController.createProfession);
routes.put("/profession/:id", professionController.updateProfession);
routes.delete("/profession/:id", professionController.deleteProfession);

module.exports = routes;
