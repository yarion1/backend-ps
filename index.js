const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");
  	
const app = express();
const routes = require("./router");
const port = 5000;

app.use(morgan("dev"));
app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Express start at http://localhost:${port}`);
});
