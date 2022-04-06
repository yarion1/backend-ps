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
            const user = await user.findAll({where: {id: req.params.id}});
            return res.json(user);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
}