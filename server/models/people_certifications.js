"use strict";
module.exports = (sequelize, DataTypes) => {
  var People_Certifications = sequelize.define("People_Certifications", {
    person_id: DataTypes.INTEGER,
    certification_id: DataTypes.INTEGER
  }, {});
  People_Certifications.associate = function(models) {
    // associations can be defined here
  };
  return People_Certifications;
};