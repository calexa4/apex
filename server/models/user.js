"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    person_id: DataTypes.INTEGER,
    secret_key: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    session_token: DataTypes.STRING,
    session_expiration: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Person, { 
      as: "person",
      foreignKey: "person_id", 
      targetKey: "id" 
    });
  };
  return User;
};