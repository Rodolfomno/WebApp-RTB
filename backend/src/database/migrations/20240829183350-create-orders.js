'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ORDERS', {
      product: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      seller: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'seller',
        references: {
          model: 'SELLERS',
          key: 'id',
        },
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('ORDERS');
  }
};
