"use strict";
module.exports = (sequelize, DataTypes) => {
  var Phone = sequelize.define("Phone", {
    country_code: DataTypes.STRING,
    number: DataTypes.STRING,
    phone_type_id: DataTypes.INTEGER,
    is_verified: DataTypes.BOOLEAN,
    is_primary: DataTypes.BOOLEAN
  }, {});
  Phone.associate = function(models) {
    Phone.belongsTo(models.PhoneType, { 
      as: "phoneType",
      foreignKey: "phone_type_id", 
      targetKey: "id" 
    });
    Phone.belongsTo(models.Person, {
      as: "person",
      foreignKey: "phone_id",
      targetKey: "id"
    });
  };
  return Phone;
};
