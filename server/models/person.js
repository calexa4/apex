"use strict";
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define("Person", {
    full_name: DataTypes.STRING,
    gender: DataTypes.ENUM("M","F"),
    company_id: DataTypes.INTEGER,
    job_title: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    Person.hasOne(models.User, { 
    	as: "user",
      foreignKey: "person_id",
    	sourceKey: "id"
    });
    Person.hasOne(models.Candidate, { 
      as: "candidate",
      foreignKey: "person_id",
      sourceKey: "id"
    });
    Person.belongsTo(models.Company, {
      as: "company",
      foreignKey: "company_id",
      targetKey: "id"
    });
    Person.belongsTo(models.Document, {
      as: "identification_document",
      foreignKey: "identification_document_id",
      targetKey: "id"
    });
    Person.hasMany(models.Email, {
      as: "emails",
      foreignKey: "person_id",
      sourceKey: "id"
    });
    Person.hasMany(models.Phone, {
      as: "phones",
      foreignKey: "person_id",
      sourceKey: "id"
    });
    Person.belongsToMany(models.Certification, {
      as: "certifications",
      through: "People_Certifications",
      foreignKey: "person_id"
    });
    Person.belongsToMany(models.Document, {
      as: "documents",
      through: "People_Documents",
      foreignKey: "person_id"
    });
    Person.belongsToMany(models.Place, {
      as: "places",
      through: "People_Places",
      foreignKey: "person_id"
    });
  };
  return Person;
};