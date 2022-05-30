const {products} = require('../models/mainModel');

module.exports = {
    async listProducts(req, res){
        // #swagger.tags = ['Products']
        try {
            const data = await products.findAll()
            return res.json(data);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },
    async getProduct(req, res){
        // #swagger.tags = ['Products']
        try {
            const product = await products.findOne({where: {id: req.params.id}});
            return res.json(product);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
    async getProductsByCategory(req, res) {
        // #swagger.tags = ['Products']
        try {
            const products = await products.findAll({
                where: {
                    category_id: req.params.id_category
                }
            });
            return res.json(products);
        } catch(error) {
            return res.json({error, msg: "Não foi possível listar produtos por categoria"});
        }
    },
    async getProductsByUser(req, res) {
        // #swagger.tags = ['Products']
        try {
            const products = await products.findAll({
                where: {
                    users_id: req.params.id_user
                }
            });
            return res.json(products);
        } catch(error) {
            return res.json({error, msg: "Não foi possível listar produtos por usuário"});
        }
    },
    async createProduct(req, res){
        // #swagger.tags = ['Products']
        const {product_name, category, description, 
               model_year, label, model, price, price_unity, 
               owner, qtd_sale, qtd_stars, evaluation, users_id, category_id} = req.body;
        try {
            const product = await products.create(
                {product_name, category, description, 
                model_year, label, model, price, price_unity, 
                owner, qtd_sale, qtd_stars, evaluation, users_id, category_id
                });
            return res.json(product);
        } catch (error) {
            return console.error('Erro na criação', error);
        }
    },
    async updateProduct(req, res){
        // #swagger.tags = ['Products']
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const {id, product_name, category, description, 
               model_year, label, model, price, price_unity, 
               owner, qtd_sale, qtd_stars, evaluation, users_id, category_id
              } = req.body;
        try {
            await products.update(
                {id, product_name, category, description, 
                model_year, label, model, price, price_unity, 
                owner, qtd_sale, qtd_stars, evaluation, users_id, category_id
                }, {where: {id: {[Op.eq]: req.params.id }}});
            return res.json({msg: `Informações do Produto "${product_name}" atualizado com sucesso!`});
        } catch (error) {
            return res.json({msg: `Produto "${product_name}" não foi atualizado`}, error);
        }
    },
    async deleteProduct(req, res){
        // #swagger.tags = ['Products']
        try {
            await products.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão do produto com ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    },
}