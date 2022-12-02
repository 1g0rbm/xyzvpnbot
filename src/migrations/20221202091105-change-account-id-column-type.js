'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.changeColumn(
        'users',
        'id',
        {
          type: Sequelize.BIGINT,
          primaryKey: true,
          unique: true,
          allowNull: false,
          autoIncrement: false,
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
        'id',
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: true,
          allowNull: false,
          autoIncrement: false,
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