"use strict";
module.exports = (sequelize, DataTypes) => {
  var Place = sequelize.define("Place", {
    place_type_id: DataTypes.INTEGER,
    is_geocode_partial_match: DataTypes.BOOLEAN,
    formatted_address: DataTypes.STRING,
    lattitude: DataTypes.DECIMAL(9,6),
    longitude: DataTypes.DECIMAL(9,6),
    post_office_box: DataTypes.STRING,
    subpremise: DataTypes.STRING,
    street_number: DataTypes.STRING,
    route: DataTypes.STRING,
    locality: DataTypes.STRING,
    administrative_area_level_2: DataTypes.STRING,
    administrative_area_level_1: DataTypes.STRING,
    country: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    postal_code_suffix: DataTypes.STRING
  }, {});
  Place.associate = function(models) {
    Place.belongsTo(models.PlaceType, { 
      as: "placeType",
      foreignKey: "place_type_id", 
      targetKey: "id" 
    });
    Place.belongsToMany(models.Person, { 
      as: "people",
      through: "People_Places",
      foreignKey: "place_id"
    });
    Place.belongsToMany(models.Company, { 
      as: "companies",
      through: "Companies_Places",
      foreignKey: "place_id"
    });
  };
  return Place;
};