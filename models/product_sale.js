'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product_sale.init({
    machines: DataTypes.STRING,
    equipaments: DataTypes.STRING,
    code_products: DataTypes.INTEGER,
    code_sale: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product_sale',
  });
  return Product_sale;
};