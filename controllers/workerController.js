const { Worker } = require("../models/mainModel");

module.exports = {
    async listWorkers(req, res) {
        // #swagger.tags = ['Workers']
        try {
            const data = await Worker.findAll();
            return res.json(data);
        } catch (error) {
            return res.json({error, msg: "Erro na busca dos trabalhadores"});
        }
    },
    async getWorker(req, res, next) {
         // #swagger.tags = ['Workers']
        try {
            const data = await Worker.findOne({
                where: {
                    id: req.params.server
                }
            });
            return res.json(data);
        } catch (error) {
            return res.json({error, msg: "Erro na busca do trabalhador"});
        }
    },
    async createWorker(req, res) {
         // #swagger.tags = ['Workers']
        const {code_user, profession, description, profession_id, user_id} = req.body;

        try {
            const data = await Worker.create({
                code_user,
                profession,
                description,
                profession_id,
                user_id
            });
            return res.json(data);
        } catch(error) {
            return res.json({error, msg: "Erro ao criar trabalhador"});
        }
    },
    async updateWorker(req, res) {
         // #swagger.tags = ['Workers']
        try {
            const data = await Worker.update({
                profession,
                description,
                profession_id
            }, {
                where: {
                    id: req.params.id
                }
            });
            return res.json(data);
        } catch(error) {
            return res.json({error, msg: "Erro ao editar trabalhador"});
        }
    },
    async deleteWorker(req, res) {
         // #swagger.tags = ['Workers']
        try {
            const data = await Worker.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.json(data);
        } catch(error) {
            return res.json({error, msg: "Erro ao excluir trabalhador"});
        }
    }
};
