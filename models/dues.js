'use strict';
module.exports = (sequelize, DataTypes) => {
  const dues = sequelize.define('dues', {
    amount: DataTypes.DECIMAL,
    size: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  dues.associate = function(models) {
    // associations can be defined here
  };
  return dues;
}