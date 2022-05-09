const express = require("express");

const categoriesController = require("../controllers/categoryController");

const routes = express.Router();

routes.get("/categories", categoriesController.listCategories);
routes.get("/categories/:id", categoriesController.getCategory);
routes.post("/categories",  categoriesController.createCategory);
routes.put("/categories/:id", categoriesController.updateCategory);
routes.delete("/categories/:id", categoriesController.deleteCategory);

module.exports = routes;