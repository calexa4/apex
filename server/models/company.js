"use strict";
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define("Company", {
    name: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    Company.hasMany(models.Person, {
      as: "people",
      foreignKey: "company_id",
      sourceKey: "id"
    });
    Company.belongsToMany(models.Place, {
      as: "places",
      through: "Company_Places",
      foreignKey: "company_id"
    });
  };
  return Company;
};