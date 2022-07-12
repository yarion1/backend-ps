'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contract.init({
    id_contract: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    solvedAt: DataTypes.DATE,
    price: DataTypes.FLOAT,
    workers_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};