const bcryptjs = require("bcryptjs");
const { users } = require("../models/mainModel");

module.exports = {
  async listusers(req, res) {
    // #swagger.tags = ['users']
    try {
      const data = await users.findAll();
      return res.json(data);
    } catch (err) {
      return console.log("Erro na listagem: ", err);
    }
  },
  async getUser(req, res) {
    // #swagger.tags = ['users']
    try {
      const user = await users.findOne({ where: { id: req.params.id } });
      return res.json(user);
    } catch (err) {
      return console.log("Erro na busca: ", err);
    }
  },
  async getUserByEmail(req, res) {
    try {
      const user = await users.findOne({ where: { email: req.email } });
      return user;
    } catch (err) {
      return console.log("Erro na busca: ", err);
    }
  },
  async createUser(req, res) {
    // #swagger.tags = ['users']
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
      const user = await users.create({
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
      return res.json(user);
    } catch (err) {
      return console.error("Erro na criação", err);
    }
  },
  async updateUser(req, res) {
    // #swagger.tags = ['users']
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
    encryptedPassword = await bcryptjs.hash(password, 10);
    try {
      await users.update(
        {
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
        },
        { where: { id: { [Op.eq]: id } } }
      );
      return res.json({ msg: `Usuário ${name} atualizado com sucesso!` });
    } catch (error) {
      return res.json({ msg: `Usuário ${name} não foi atualizado` }, err);
    }
  },
  async deleteUser(req, res) {
    // #swagger.tags = ['users']
    try {
      await users.destroy({ where: { id: req.params.id } });
      return res.json({
        msg: `Exclusão de usuário com ID ${req.params.id} feita com sucesso!`,
      });
    } catch (err) {
      return console.log("Erro na exclusão: ", err);
    }
  },
};
