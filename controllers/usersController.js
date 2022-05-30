const bcryptjs = require("bcryptjs");
const { Users } = require("../models/mainModel");

module.exports = {
  async listUsers(req, res) {
    try {
      const data = await Users.findAll();
      return res.json(data);
    } catch (err) {
      return console.error("Erro na listagem: ", err);
    }
  },
  async getUser(req, res) {
    try {
      const user = await Users.findOne({ where: { id: req.params.id } });
      return res.json(user);
    } catch (err) {
      return console.log("Erro na busca: ", err);
    }
  },
  async getUserByEmail(req, res) {
    try {
      const user = await Users.findOne({ where: { email: req.email } });
      return user;
    } catch (err) {
      return console.log("Erro na busca: ", err);
    }
  },
  async createUser(req, res) {
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
      token,
    } = req.body;
    try {
      const user = await Users.create({
        name,
        password: await bcryptjs.hash(password, 10),
        address,
        rate,
        type_user,
        cpf,
        cep,
        birthdate,
        genre,
        phone_number,
        email,
        token,
      });
      return user;
    } catch (err) {
      return console.error("Erro na criação", err);
    }
  },
  async updateUser(req, res) {
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;
    const {
      name,
      password,
      address,
      rate,
      type_user,
      cpf,
      cep,
      reference,
      birthdate,
      genre,
      phone_number,
      email,
    } = req.body;
    const id = req.params.id;
    try {
      await Users.update(
        {
          name,
          password: await bcryptjs.hash(password, 10),
          address,
          rate,
          type_user,
          cpf,
          cep,
          reference,
          birthdate,
          genre,
          phone_number,
          email,
        },
        { where: { id: { [Op.eq]: id } } }
      );
      return res.json({ msg: `Usuário ${name} atualizado com sucesso!` });
    } catch (error) {
      return res.json({ msg: `Usuário ${name} não foi atualizado` }, err);
    }
  },
  async deleteUser(req, res) {
    try {
      await users.destroy({ where: { id: req.params.id } });
      return res.json({
        msg: `Exclusão de usuário com ID ${req.params.id} feita com sucesso!`,
      });
    } catch (err) {
      return console.err("Erro na exclusão: ", err);
    }
  },
};
