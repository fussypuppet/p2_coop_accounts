'use strict';
module.exports = (sequelize, DataTypes) => {
  const unit = sequelize.define('unit', {
    number: DataTypes.INTEGER,
    size: DataTypes.STRING,
    shareholderId: DataTypes.INTEGER
  }, {});
  unit.associate = function(models) {
    models.unit.hasOne(models.shareholder)
  };
  return unit;
}