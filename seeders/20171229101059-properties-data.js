'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Properties', [{
      PropertyName: "Property 1"
    },{
      PropertyName: "Property 2"
    },{
      PropertyName: "Property 3"
    },{
      PropertyName: "Property 4"
    },{
      PropertyName: "Property 5"
    },{
      PropertyName: "Property 6"
    },{
      PropertyName: "Property 7"
    },{
      PropertyName: "Property 8"
    },{
      PropertyName: "Property 9"
    },{
      PropertyName: "Property 10"
    },{
      PropertyName: "Property 11"
    },{
      PropertyName: "Property 12"
    },{
      PropertyName: "Property 13"
    },{
      PropertyName: "Property 14"
    },{
      PropertyName: "Property 15"
    },{
      PropertyName: "Property 16"
    },{
      PropertyName: "Property 17"
    },{
      PropertyName: "Property 18"
    },{
      PropertyName: "Property 19"
    },{
      PropertyName: "Property 20"
    },{
      PropertyName: "Property 21"
    },{
      PropertyName: "Property 22"
    },{
      PropertyName: "Property 23"
    },{
      PropertyName: "Property 24"
    },{
      PropertyName: "Property 25"
    },{
      PropertyName: "Property 26"
    },{
      PropertyName: "Property 27"
    },{
      PropertyName: "Property 28"
    },{
      PropertyName: "Property 29"
    },{
      PropertyName: "Property 30"
    },{
      PropertyName: "Property 31"
    },{
      PropertyName: "Property 32"
    },{
      PropertyName: "Property 33"
    },{
      PropertyName: "Property 34"
    },{
      PropertyName: "Property 35"
    },{
      PropertyName: "Property 36"
    },{
      PropertyName: "Property 37"
    },{
      PropertyName: "Property 38"
    },{
      PropertyName: "Property 39"
    },{
      PropertyName: "Property 40"
    },{
      PropertyName: "Property 41"
    },{
      PropertyName: "Property 42"
    },{
      PropertyName: "Property 43"
    },{
      PropertyName: "Property 44"
    },{
      PropertyName: "Property 45"
    },{
      PropertyName: "Property 46"
    },{
      PropertyName: "Property 47"
    },{
      PropertyName: "Property 48"
    },{
      PropertyName: "Property 49"
    },{
      PropertyName: "Property 50"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Properties', null, {});
  }
};
