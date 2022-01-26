'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('products', 'offer', {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('products', 'offer');
    },
};
