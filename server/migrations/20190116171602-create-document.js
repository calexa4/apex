"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Document", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      document_category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "DocumentCategory",
          key: "id"
        }
      },
      expiration: {
        type: Sequelize.DATEONLY
      },
      document_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "DocumentType",
          key: "id"
        }
      },
      size: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bucket: {
        allowNull: false,
        type: Sequelize.STRING
      },
      key: {
        allowNull: false,
        type: Sequelize.STRING
      },
      upload_status: {
        allowNull: false,
        type: Sequelize.ENUM("pending", "complete", "verified")
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      queryInterface.addConstraint(
        "Document", 
        ["name", "document_type_id"], 
        { type: "unique" }
      );
    });;
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Document");
  }
};