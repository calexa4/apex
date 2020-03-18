"use strict";
module.exports = (sequelize, DataTypes) => {
  var PhoneType = sequelize.define("PhoneType", {
    name: DataTypes.STRING
  }, {});
  PhoneType.associate = function(models) {
    PhoneType.hasMany(models.Phone, {
      as: "phones",
      foreignKey: "phone_type_id",
      sourceKey: "id"
    });
  };
  return PhoneType;
};