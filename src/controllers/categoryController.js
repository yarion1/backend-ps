const {Category} = require('../models/mainModel');

module.exports = {
    async listCategories(req, res){
        // #swagger.tags = ['Categories']
        try {
            const data = await Category.findAll()
            return res.json(data);
        } catch (err) {
            return console.log("Erro na listagem: ", err);
        }
    },
    async getCategory(req, res){
        // #swagger.tags = ['Categories']
        try {
            const categories = await Category.findOne({where: {id: req.params.id}});
            return res.json(categories);
        } catch (err) {
            return console.log("Erro na busca: ", err);
        }
    },
    async createCategory(req, res){
        // #swagger.tags = ['Categories']
        const {title, details} = req.body;
        try {
            const categories = await Category.create({
              title,
              details
            });
            return res.json(categories);
          } catch (error) {
            return console.log('Erro na criação', error);
        }
    },
    async updateCategory(req, res){
        // #swagger.tags = ['Categories']
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const {title, details} = req.body;
        try {
            await Category.update(
                {title, details}, {where: {id: {[Op.eq]: req.params.id }}});
            return res.json({msg: `Informações da Categoria "${title}" atualizadas com sucesso!`});
        } catch (error) {
            return res.json({msg: `Categoria "${title}" não foi atualizado`}, error);
        }
    },
    async deleteCategory(req, res){
        // #swagger.tags = ['Categories']
        try {
            await Category.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão da categoria ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.log("Erro na exclusão: ", err);
        }
    },
}