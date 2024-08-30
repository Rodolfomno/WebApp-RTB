'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('SELLERS', {
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('SELLERS');
  }
};
