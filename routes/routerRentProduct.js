const express = require("express");

const rentProductController = require('../controllers/rentProductController');

const routes = express.Router();

routes.get("/rent_product", rentProductController.listRentProduct);
routes.get("/rent_product/:id", rentProductController.getRentProduct);
routes.post("/rent_product",  rentProductController.createRentProduct);
routes.put("/rent_product/:id", rentProductController.updateRentProduct);
routes.delete("/rent_product/:id", rentProductController.deleteRentProduct);

module.exports = routes;