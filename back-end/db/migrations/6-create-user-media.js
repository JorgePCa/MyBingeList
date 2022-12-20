'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userMedia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_user: {
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      fk_media: {
        allowNull: false,
        references: {
          model: 'media',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      fk_status: {
        allowNull: false,
        references: {
          model: 'statusW',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('userMedia');
  }
};