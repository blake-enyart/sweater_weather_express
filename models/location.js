'use strict';
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('location', {
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {});
  location.associate = function(models) {
    // associations can be defined here
  };
  return location;
};