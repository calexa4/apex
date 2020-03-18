"use strict";
module.exports = (sequelize, DataTypes) => {
  var People_Documents = sequelize.define("People_Documents", {
    person_id: DataTypes.INTEGER,
    document_id: DataTypes.INTEGER
  }, {});
  People_Documents.associate = function(models) {
    // associations can be defined here
  };
  return People_Documents;
};