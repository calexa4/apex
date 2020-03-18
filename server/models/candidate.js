"use strict";
module.exports = (sequelize, DataTypes) => {
  var Candidate = sequelize.define("Candidate", {
    person_id: DataTypes.INTEGER,
    tagline: DataTypes.STRING,
    summary: DataTypes.STRING,
    highlighted_xp_description: DataTypes.STRING,
    highlighted_xp_company: DataTypes.STRING,
    highlighted_xp_date: DataTypes.DATEONLY,
    zipcode: DataTypes.INTEGER,
    is_available: DataTypes.BOOLEAN
  }, {});
  Candidate.associate = function(models) {
    Candidate.belongsTo(models.Person, { 
      as: "person",
      foreignKey: "person_id", 
      targetKey: "id" 
    });
  };
  return Candidate;
};