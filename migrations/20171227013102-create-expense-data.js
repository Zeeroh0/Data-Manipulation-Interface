'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExpenseData', {
      PropertyID: {
        type: Sequelize.INTEGER
      },
      AccountID: {
        type: Sequelize.INTEGER
      },
      PeriodEndData: {
        type: Sequelize.DATEONLY
      },
      ExpenseAmount: {
        type: Sequelize.INTEGER
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    },{
      timestamps: false,
      freezeTableName: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ExpenseData');
  }
};