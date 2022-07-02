"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RentProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RentProduct.init(
    {
      machines: DataTypes.STRING,
      equipaments: DataTypes.STRING,
      code_product: DataTypes.STRING,
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "RentProduct",
    }
  );
  return RentProduct;
};
