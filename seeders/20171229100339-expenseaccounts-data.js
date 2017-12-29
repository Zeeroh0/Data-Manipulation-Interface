'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ExpenseAccounts', [{
      AccountName: "Account 1"
    },{
      AccountName: "Account 2"
    },{
      AccountName: "Account 3"
    },{
      AccountName: "Account 4"
    },{
      AccountName: "Account 5"
    },{
      AccountName: "Account 6"
    },{
      AccountName: "Account 7"
    },{
      AccountName: "Account 8"
    },{
      AccountName: "Account 9"
    },{
      AccountName: "Account 10"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ExpenseAccounts', null, {});
  }
};
