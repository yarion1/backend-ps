const { Profession } = require("../models/mainModel");

module.exports = {
  async listProfessions(req, res) {
    // #swagger.tags = ['Professions']
    try {
      const data = await Profession.findAll();
      return res.json(data);
    } catch (error) {
      return res.json({ error, msg: "Erro na busca dos profissãoes" });
    }
  },
  async getProfession(req, res) {
    // #swagger.tags = ['Professions']
    try {
      const data = await Profession.findOne({
        where: {
          id: req.params.id,
        },
      });
      return res.json(data);
    } catch (error) {
      return res.json({ error, msg: "Erro na busca da profissão" });
    }
  },
  async createProfession(req, res) {
    // #swagger.tags = ['Professions']
    const { name } = req.body;

    try {
      const data = await Profession.create({
        name,
      });
      return res.json(data);
    } catch (error) {
      return res.json({ error, msg: "Erro ao criar profissão" });
    }
  },
  async updateProfession(req, res) {
    // #swagger.tags = ['Professions']
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;
    const id = req.params.id;
    const { name } = req.body;
    try {
      const data = await Profession.update(
        {
          name,
        },
        { where: { id: { [Op.eq]: id } } }
      );
      return res.json(data);
    } catch (error) {
      return res.json({ error, msg: "Erro ao editar profissão" });
    }
  },
  async deleteProfession(req, res) {
    // #swagger.tags = ['Professions']
    try {
      const data = await Profession.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.json(data);
    } catch (error) {
      return res.json({ error, msg: "Erro ao excluir profissão" });
    }
  },
};
