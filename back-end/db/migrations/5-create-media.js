'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_type: {
        allowNull: false,
        references: {
          model: 'type',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },      
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      season_volume: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      score: {
        allowNull: false,
        type: Sequelize.REAL
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('media');
  }
};