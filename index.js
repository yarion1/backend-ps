const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");
  	
const app = express();

app.use(morgan("dev"));
app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
  console.log("Express start at http://localhost:5000");
});
