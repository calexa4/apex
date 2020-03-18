"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("People_Places", {
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
        "People_Places", 
        ["person_id", "place_id"], 
        { type: "unique" }
      );
      queryInterface.addConstraint(
        "People_Places", 
        ["person_id", "is_primary"], 
        { type: "unique" }
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("People_Places");
  }
};