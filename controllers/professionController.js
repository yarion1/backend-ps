const {Profession} = require('../models/mainModel');

module.exports = {
    async listProf(req, res){
        try {
            const data = await Profession.findAll()
            return res.json(data);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },
    async getProfession(req, res){
        try {
            const Prof = await Profession.findOne({where: {id: req.params.id}});
            return res.json(Prof);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
    async createProfession(req, res){
        const {title, details} = req.body;
        try {
            const Prof = await Profession.create({
              title,
              details
            });
            return res.json(Prof);
          } catch (error) {
            return console.error('Erro na criação', error);
        }
    },
    async updateProfession(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const {title, details} = req.body;
        try {
            await Profession.update(
                {title, details}, {where: {id: {[Op.eq]: req.params.id }}});
            return res.json({msg: `Informações da Categoria "${title}" atualizadas com sucesso!`});
        } catch (error) {
            return res.json({msg: `Categoria "${title}" não foi atualizado`}, error);
        }
    },
    async deleteProfession(req, res){
        try {
            await Profession.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão da categoria ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    },
} 