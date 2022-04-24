const {products} = require('../models/mainModel');

module.exports = {
    async listProducts(req, res){
        try {
            const data = await products.findAll()
            return res.json(data);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },
    async getProduct(req, res){
        try {
            const product = await products.findOne({where: {id: req.params.id}});
            return res.json(product);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
    async createProduct(req, res){
        const {id, product_name, category, description, 
               model_year, label, model, price, price_unity, 
               owner, qtd_sale, qtd_stars, evaluation, category_id} = req.body;
        try {
            const product = await products.create(
                {id, product_name, category, description, 
                model_year, label, model, price, price_unity, 
                owner, qtd_sale, qtd_stars, evaluation, category_id
                });
            return res.json(product);
        } catch (error) {
            return console.error('Erro na criação', err);
        }
    },
    async updateProduct(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const {id, product_name, category, description, 
               model_year, label, model, price, price_unity, 
               owner, qtd_sale, qtd_stars, evaluation, category_id
              } = req.body;
        try {
            await products.update(
                {id, product_name, category, description, 
                model_year, label, model, price, price_unity, 
                owner, qtd_sale, qtd_stars, evaluation, category_id
                }, {where: {id: {[Op.eq]: req.params.id }}});
            return res.json({msg: `Informações do Produto "${product_name}" atualizado com sucesso!`});
        } catch (error) {
            return res.json({msg: `Produto "${product_name}" não foi atualizado`}, err);
        }
    },
    async deleteProduct(req, res){
        try {
            await products.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão do produto com ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    },
}