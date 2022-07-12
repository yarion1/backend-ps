const express = require("express");

const productsController = require("../controllers/productsController");

const routes = express.Router();

routes.get("/products", productsController.listProducts);
routes.get("/products/:id", productsController.getProduct);
routes.get("/productscategory/:id_category", productsController.getProductsByCategory);
routes.get("/productsuser/:id_user", productsController.getProductsByUser);
routes.post("/products",  productsController.createProduct);
routes.put("/products/:id", productsController.updateProduct);
routes.delete("/products/:id", productsController.deleteProduct);

module.exports = routes;