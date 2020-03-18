"use strict";
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define("Employee", {
    person_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    middle_initial: DataTypes.CHAR(1),
    last_name: DataTypes.STRING,
    name_suffix_id: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    ssn: DataTypes.INTEGER
  }, {});
  Employee.associate = function(models) {
    Employee.belongsTo(models.Person, { 
      as: "person",
      foreignKey: "person_id", 
      targetKey: "id" 
    });
    Employee.belongsTo(models.NameSuffix, { 
      as: "nameSuffix",
      foreignKey: "name_suffix_id", 
      targetKey: "id" 
    });
  };
  return Employee;
};