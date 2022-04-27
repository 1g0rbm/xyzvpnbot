'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'users',
        'password',
        {
          type: Sequelize.DataTypes.STRING,
          defaultValue: null,
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
      await queryInterface.removeColumn('users', 'password', { transaction });
      await transaction.commit();
    } catch (e) {
      await transaction.rollback()
      throw e
    }
  }
};
