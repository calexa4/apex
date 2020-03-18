"use strict";
module.exports = (sequelize, DataTypes) => {
  var People_Places = sequelize.define("People_Places", {
    person_id: DataTypes.INTEGER,
    place_id: DataTypes.INTEGER,
    is_primary: DataTypes.BOOLEAN
  }, {});
  People_Places.associate = function(models) {
    // associations can be defined here
  };
  return People_Places;
};