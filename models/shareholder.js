'use strict';
module.exports = (sequelize, DataTypes) => {
  const shareholder = sequelize.define('shareholder', {
    name: DataTypes.STRING,
    name2: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    unitId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  shareholder.associate = function(models) {
    // associations can be defined here
    models.shareholder.hasOne(models.unit),
    models.shareholder.hasOne(models.user),
    models.shareholder.hasMany(models.transaction)
  };
  return shareholder;
}