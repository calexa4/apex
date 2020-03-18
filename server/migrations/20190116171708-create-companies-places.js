"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Companies_Places", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Company",
          key: "id"
        }
      },
      place_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Place",
          key: "id"
        }
      },
      is_primary: {
        type: Sequelize.BOOLEAN
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
        "Companies_Places", 
        ["company_id", "place_id"], 
        { type: "unique" }
      );
      queryInterface.addConstraint(
        "Companies_Places", 
        ["company_id", "is_primary"], 
        { type: "unique" }
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Companies_Places");
  }
};