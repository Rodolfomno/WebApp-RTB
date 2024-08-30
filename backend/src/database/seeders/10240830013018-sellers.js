'use strict';
const mockTable = require('../../../sellers.json')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SELLERS', mockTable, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SELLERS', null, {});
  }
};

