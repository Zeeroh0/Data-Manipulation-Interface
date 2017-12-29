'use strict';
module.exports = (sequelize, DataTypes) => {
  var ExpenseData = sequelize.define('ExpenseData', {
    PropertyID: DataTypes.INTEGER,
    AccountID: DataTypes.INTEGER,
    PeriodEndData: DataTypes.DATEONLY,
    ExpenseAmount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ExpenseData;
};