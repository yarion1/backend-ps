const { RentProduct } = require('../models/mainModel');

module.exports = {
    async listRentProduct(req, res) {
        // #swagger.tags = ['Rent Product']
        try {
            const data = await RentProduct.findAll()
            return res.json(data);
        } catch (err) {
            return console.log("Erro na listagem: ", err);
        }
    },
    async getRentProduct(req, res) {
        // #swagger.tags = ['Rent Product']
        try {
            const rentProduct = await RentProduct.findOne({ where: { id: req.params.id } });
            return res.json(rentProduct);
        } catch (err) {
            return console.log("Erro na busca: ", err);
        }
    },
    async createRentProduct(req, res) {
        // #swagger.tags = ['Rent Product']
        const { machines, equipaments, code_product, product_id } = req.body;
        try {
            const rentProduct = await RentProduct.create({
                machines,
                equipaments,
                code_product,
                product_id
            });
            return res.json(rentProduct);
        } catch (error) {
            return console.log('Erro na criação', error);
        }
    },
    async updateRentProduct(req, res) {
        // #swagger.tags = ['Rent Product']
        const { machines, equipaments, code_product, product_id } = req.body;

        try {
            const rentProduct = await RentProduct.update({
                machines,
                equipaments,
                code_product,
                product_id
            }, {
                where: {
                    id: req.params.id
                }
            });

            return res.json({ msg: `Informações do aluguel "${equipaments}" atualizadas com sucesso!` });
        } catch (error) {
            return res.json({ msg: `aluguel "${equipaments}" não foi atualizado` }, error);
        }
    },
    async deleteRentProduct(req, res) {
        // #swagger.tags = ['Rent Product']
        try {
            await RentProduct.destroy({ where: { id: req.params.id } });
            return res.json({ msg: `Exclusão de aluguel ${req.params.id} feita com sucesso!` });
        } catch (err) {
            return console.log("Erro na exclusão: ", err);
        }
    },
}