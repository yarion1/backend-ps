"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductRents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductRents.init(
    {
      name_equipament: DataTypes.STRING,
      price: DataTypes.STRING,
      description: DataTypes.STRING,
      users_id: DataTypes.INTEGER,
      users_name: DataTypes.STRING,
      product_id:  DataTypes.INTEGER,
      phone:  DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "ProductRents",
    }
  );
  return ProductRents;
};
