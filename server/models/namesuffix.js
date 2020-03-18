"use strict";
module.exports = (sequelize, DataTypes) => {
  var NameSuffix = sequelize.define("NameSuffix", {
    suffix: DataTypes.STRING
  }, {});
  NameSuffix.associate = function(models) {
    NameSuffix.hasMany(models.Employee, {
      as: "employees",
      foreignKey: "name_suffix_id",
      sourceKey: "id"
    });
  };
  return NameSuffix;
};