const express = require("express");

const users = require("./routerUsers");
const product = require("./routerProduct");
const category = require("./routerCategory");
const profession = require("./routerProfession");
const rentProduct = require("./routerRentProduct");
const worker = require("./routerWorker");
const auth = require("./routerAuth");

const app = express();

app.use(users);
app.use(product);
app.use(category);
app.use(profession);
app.use(rentProduct);
app.use(worker)
app.use(auth);

module.exports = app;
