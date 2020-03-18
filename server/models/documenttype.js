"use strict";
module.exports = (sequelize, DataTypes) => {
  var DocumentType = sequelize.define("DocumentType", {
    file_extension: DataTypes.STRING,
    mime_type: DataTypes.STRING
  }, {});
  DocumentType.associate = function(models) {
    DocumentType.hasMany(models.Document, { 
      as: "documents",
      foreignKey: "document_type_id",
      sourceKey: "id"
    });
  };
  return DocumentType;
};