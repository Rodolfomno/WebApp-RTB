'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Sellers', {
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Sellers');
  }
};
