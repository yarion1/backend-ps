const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");

const users = require("./routes/routerUsers");
const product = require("./routes/routerProduct");
const category = require("./routes/routerCategory");
// const profession = require("./routes/routerProfession");
const rentProduct = require("./routes/routerRentProduct");
const auth = require('./routes/routerAuth')

const app = express();
const port = 5000;

app.use(morgan("dev"));
app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(users);
app.use(product);
app.use(category);
// app.use(profession);
app.use(rentProduct);
app.use(auth);


app.listen(port, () => {
  console.log(`Express start at http://localhost:${port}`);
});
