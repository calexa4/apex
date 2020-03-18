"use strict";
module.exports = (sequelize, DataTypes) => {
  var Email = sequelize.define("Email", {
    person_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
    is_primary: DataTypes.BOOLEAN
  }, {});
  Email.associate = function(models) {
    Email.belongsTo(models.Person, {
      as: "person",
      foreignKey: "person_id",
      targetKey: "id"
    });
  };
  return Email;
};