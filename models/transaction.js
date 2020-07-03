'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    category: DataTypes.STRING,
    checkNumber: DataTypes.INTEGER,
    shareholderId: DataTypes.INTEGER
  }, {});
  transaction.associate = function(models) {
    // associations can be defined here
    models.transaction.belongsTo(models.shareholder)
  };
  return transaction;
};