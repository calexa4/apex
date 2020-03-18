"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Phone", {
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
      country_code: {
        allowNull: false,
        type: Sequelize.STRING
      },
      number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "PhoneType",
          key: "id"
        }
      },
      is_verified: {
        type: Sequelize.BOOLEAN
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
        "Phone", 
        ["person_id", "country_code", "number"], 
        { type: "unique" }
      );
    }).then(() => {
      queryInterface.addConstraint(
        "Phone", 
        ["person_id", "is_primary"], 
        { type: "unique" }
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Phone");
  }
};