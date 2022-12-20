'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(
      'user',
      [
        {
          id: 1,
          name: "admin",
          mail: "admin@mybingelist.com",
          birth_date: new Date(),
          password: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'statusW',
      [
        {
          id: 1,
          definition: "Plan to Watch",
          description: "Haven't watched the selected content yet, but am planning to",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          definition: "Watching",
          description: "Currently watching the selected content ",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          definition: "Completed",
          description: "Have alredy completed watching the selected content",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );



  },

  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
