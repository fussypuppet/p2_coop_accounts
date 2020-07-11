'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    category: DataTypes.STRING,
    checkNumber: DataTypes.BIGINT,
    notes: DataTypes.TEXT,
    shareholderId: DataTypes.INTEGER
  }, {});
  transaction.associate = function(models) {
    models.transaction.belongsTo(models.shareholder)
  };
  return transaction;
}