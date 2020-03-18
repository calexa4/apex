"use strict";
module.exports = (sequelize, DataTypes) => {
  var PlaceType = sequelize.define("PlaceType", {
    name: DataTypes.STRING
  }, {});
  PlaceType.associate = function(models) {
    PlaceType.hasMany(models.Place, {
      as: "places",
      foreignKey: "place_type_id",
      sourceKey: "id"
    });
  };
  return PlaceType;
};