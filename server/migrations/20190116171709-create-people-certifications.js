"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("People_Certifications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      person_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Person",
          key: "id"
        }
      },
      certification_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Certification",
          key: "id"
        }
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
        "People_Certifications", 
        ["person_id", "certification_id"], 
        { type: "unique" }
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("People_Certifications");
  }
};