'use strict';
module.exports = (sequelize, DataTypes) => {
  var ExpenseAccount = sequelize.define('ExpenseAccount', {
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
  return ExpenseAccount;
};