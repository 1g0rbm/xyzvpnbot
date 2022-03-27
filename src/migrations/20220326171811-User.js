'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: false,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true
      },
      lastName: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
