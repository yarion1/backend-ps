require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = require("../controllers/usersController");
const auth = require("../middleware/auth");

const app = express();

app.use(express.json({ limit: "50mb" }));

module.exports = {
  async register(req, res) {
    // #swagger.tags = ['Auth']
    try {
      const {
        name,
        password,
        address,
        rate,
        type_user,
        cpf,
        cep,
        birthdate,
        genre,
        phone_number,
        email,
      } = req.body;

      if (
        !(
          name &&
          password &&
          address &&
          rate &&
          type_user &&
          cpf &&
          cep &&
          birthdate &&
          genre &&
          phone_number &&
          email
        )
      ) {
        res.status(400).send("Todos os campos são obrigatórios");
      }

      const oldUser = await users.getUserByEmail({ email });

      if (oldUser) {
        return res
          .status(409)
          .send("Usuário já cadastrado! Por favor, faça login.");
      }

      encryptedPassword = await bcrypt.hash(password, 10);

      const user = await users.createUser(req, res);
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      return res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  },

  async login(req, res) {
    // #swagger.tags = ['Auth']
    try {
      const { email, password } = req.body;

      if (!(email && password)) {
        res.status(400).send("Todos os campos são obrigatórios");
      }

      const user = await users.getUserByEmail({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user.id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );

        user.token = token;

        return res.status(200).json(user);
      }
      res.status(401).send("Credenciais inválidas");
    } catch (err) {
      console.log(err);
    }
  },

  async verifyEmail(req, res) {
    // #swagger.tags = ['Auth']
    const { email } = req.body;
    const oldUser = await users.getUserByEmail({ email });

    if (oldUser) {
      return res.status(409).send(true);
    } else {
      res.status(200).send(false);
    }
  },
};
