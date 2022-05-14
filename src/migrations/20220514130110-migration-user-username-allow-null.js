'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.changeColumn(
        'users',
        'username',
        {
          type: Sequelize.STRING,
          defaultValue: null,
          unique: false,
          allowNull: true
        },
        { transaction }
      );
      await transaction.commit()
    } catch (e) {
      await transaction.rollback()
      throw e
    }
  },

  async down (queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.changeColumn(
        'users',
        'username',
        {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        { transaction }
      );
      await transaction.commit();
    } catch (e) {
      await transaction.rollback()
      throw e
    }
  }
};