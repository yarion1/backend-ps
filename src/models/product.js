'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    product_name: DataTypes.STRING,
    description: DataTypes.STRING,
    model_year: DataTypes.DATE,
    label: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.STRING,
    price_unity: DataTypes.STRING,
    qtd_sale: DataTypes.INTEGER,
    qtd_stars: DataTypes.INTEGER,
    evaluation: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    users_name: DataTypes.STRING,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Product;
};