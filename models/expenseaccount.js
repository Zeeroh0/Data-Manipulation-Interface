'use strict';
module.exports = (sequelize, DataTypes) => {
  var ExpenseAccounts = sequelize.define('ExpenseAccounts', {
    AccountID: DataTypes.INTEGER,
    AccountName: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
  });
  return ExpenseAccounts;
};