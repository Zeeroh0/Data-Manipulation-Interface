'use strict';
module.exports = (sequelize, DataTypes) => {
  var Properties = sequelize.define('Properties', {
    PropertyID: DataTypes.INTEGER,
    PropertyName: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Properties;
};