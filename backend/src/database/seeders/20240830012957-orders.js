'use strict';
const mockTable = require('../../../orders.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('ORDERS', mockTable, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ORDERS', null, {});
  }
};
