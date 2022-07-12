const { ProductRents } = require('../models/mainModel');

module.exports = {
    async listRentProduct(req, res) {
        try {
            const data = await ProductRents.findAll()
            return res.json(data);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },
    async getRentProduct(req, res) {
          // #swagger.tags = ['Products']
    try {
        const products = await ProductRents.findAll({
          where: {
            users_id: req.params.id,
          },
        });
        return res.json(products);
      } catch (error) {
        return res.json({
          error,
          msg: "Não foi possível listar produtos alugados por usuário",
        });
      }
    },
    async createRentProduct(req, res) {
        const { name_equipament,users_name,phone,product_id, price, description, users_id } = req.body;
        try {
            const rentProduct = await ProductRents.create({
                name_equipament,users_name,phone,product_id,
                price,
                description,
                users_id
            });
            return res.json(ProductRents);
        } catch (error) {
            return console.error('Erro na criação', error);
        }
    },
    async updateRentProduct(req, res) {
        const { name_equipament,users_name,phone,product_id, price, description, users_id } = req.body;

        try {
            const rentProduct = await ProductRents.update({
                name_equipament,users_name,phone,product_id,
                price,
                description,
                users_id
            }, {
                where: {
                    id: req.params.id
                }
            });

            return res.json({ msg: `Informações do aluguel "${price}" atualizadas com sucesso!` });
        } catch (error) {
            return res.json({ msg: `aluguel "${price}" não foi atualizado` }, error);
        }
    },
    async deleteRentProduct(req, res) {
        try {
            await RentProduct.destroy({ where: { id: req.params.id } });
            return res.json({ msg: `Exclusão de aluguel ${req.params.id} feita com sucesso!` });
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    },
}