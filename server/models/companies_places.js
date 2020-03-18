"use strict";
module.exports = (sequelize, DataTypes) => {
  var Companies_Places = sequelize.define("Companies_Places", {
    company_id: DataTypes.INTEGER,
    place_id: DataTypes.INTEGER,
    is_primary: DataTypes.BOOLEAN
  }, {});
  Companies_Places.associate = function(models) {
    // associations can be defined here
  };
  return Companies_Places;
};