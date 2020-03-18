"use strict";
module.exports = (sequelize, DataTypes) => {
  var Certification = sequelize.define("Certification", {
    source: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Certification.associate = function(models) {
    Certification.belongsToMany(models.Person, {
    	as: "people",
    	through: "People_Certifications",
    	foreignKey: "certification_id",
    });
  };
  return Certification;
};