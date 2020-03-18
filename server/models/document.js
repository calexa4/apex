"use strict";
module.exports = (sequelize, DataTypes) => {
  var Document = sequelize.define("Document", {
    name: DataTypes.STRING,
    document_category_id: DataTypes.INTEGER,
    expiration: DataTypes.DATEONLY,
    document_type_id: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    bucket: DataTypes.STRING,
    key: DataTypes.STRING,
    upload_status: DataTypes.ENUM("pending","complete","verified")
  }, {});
  Document.associate = function(models) {
    Document.belongsTo(models.DocumentCategory, { 
      as: "documentCategory",
      foreignKey: "document_category_id", 
      targetKey: "id" 
    });
    Document.belongsTo(models.DocumentType, { 
      as: "documentType",
      foreignKey: "document_type_id", 
      targetKey: "id" 
    });
    Document.belongsToMany(models.Person, { 
      as: "people",
      through: "People_Documents",
      foreignKey: "document_id"
    });
  };
  return Document;
};