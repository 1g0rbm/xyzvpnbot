'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'users',
        'status',
        {
          type: Sequelize.DataTypes.STRING,
          defaultValue: 'do_not_have_vpn',
          allowNull: false
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
      await queryInterface.removeColumn('users', 'status', { transaction });
      await transaction.commit();
    } catch (e) {
      await transaction.rollback()
      throw e
    }
  }
};
