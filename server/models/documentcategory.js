"use strict";
module.exports = (sequelize, DataTypes) => {
  var DocumentCategory = sequelize.define("DocumentCategory", {
    name: DataTypes.STRING
  }, {});
  DocumentCategory.associate = function(models) {
    DocumentCategory.hasMany(models.Document, { 
      as: "documents",
      foreignKey: "document_category_id",
      sourceKey: "id"
    });
  };
  return DocumentCategory;
};