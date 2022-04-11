const {users} = require('../models/mainModel');

module.exports = {
    async listUsers(req, res){
        try {
            const data = await users.findAll()
            return res.json(data);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },
    async getUser(req, res){
        try {
            const user = await users.findAll({where: {id: req.params.id}});
            return res.json(user);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
    async createUser(req, res){
        const {name, cpf, cep, reference, birthdate, genre, phone_number, email} = req.body;
        try {
            const user = await users.create({name, cpf, cep, reference, birthdate, genre, phone_number, email});
            return res.json(user);
        } catch (error) {
            return console.error('Erro na criação', err);
        }
    },
    async updateUser(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const { name, cpf, cep, reference, birthdate, genre, phone_number, email } = req.body;
        const id = req.params.id;
        try {
            await users.update({name, cpf, cep, reference, birthdate, genre, phone_number, email}, {where: {id: {[Op.eq]: id }}});
            return res.json({msg: `Usuário ${name} atualizado com sucesso!`});
        } catch (error) {
            return res.json({msg: `Usuário ${name} não foi atualizado`}, err);
        }
    },
}