require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = require("../controllers/usersController");
const auth = require("../middleware/auth");

const app = express();

app.use(express.json({ limit: "50mb" }));

module.exports = {
  async register(req, res) {
    try {
      const { first_name, last_name, email, password } = req.body;

      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }

      const oldUser = await users.getUser({ email });

      if (oldUser) {
        return res
          .status(409)
          .send("Usuário já cadastrado! Por favor, faça login.");
      }

      encryptedPassword = await bcrypt.hash(password, 10);

      const user = await users.createUser(req, res)

      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!(email && password)) {
        res.status(400).send("Todos os campos são obrigatórios");
      }

      const user = await users.getUser({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user.id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );

        user.token = token;

        res.status(200).json(user);
      }
      res.status(400).send("Crednciais inválidas");
    } catch (err) {
      console.log(err);
    }
  },
};
