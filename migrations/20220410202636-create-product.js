'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code_product: {
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      model_year: {
        type: Sequelize.DATE
      },
      label: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      price_unity: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.INTEGER
      },
      code_product: {
        type: Sequelize.INTEGER
      },
      qtd_sale: {
        type: Sequelize.INTEGER
      },
      qtd_stars: {
        type: Sequelize.INTEGER
      },
      evaluation: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};