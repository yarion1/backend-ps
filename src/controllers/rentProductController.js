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
<<<<<<< HEAD
        try {
            const rentProduct = await RentProduct.findOne({ where: { id: req.params.id } });
            return res.json(rentProduct);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
    async createRentProduct(req, res) {
        const { machines, equipaments, code_product, product_id } = req.body;
=======
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
>>>>>>> 53a7dd6446ece9d5a9dcca1c2de25adccba40a26
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
<<<<<<< HEAD
        const { machines, equipaments, code_product, product_id } = req.body;
=======
        const { name_equipament,users_name,phone,product_id, price, description, users_id } = req.body;
>>>>>>> 53a7dd6446ece9d5a9dcca1c2de25adccba40a26

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