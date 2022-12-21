'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mediaCategory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      fk_category: {
        allowNull: false,
        references: {
          model: 'category',
          key: 'id'
        },
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('mediaCategory');
  }
};