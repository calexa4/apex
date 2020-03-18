"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Place", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      place_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "PlaceType",
          key: "id"
        }
      },
      is_geocode_partial_match: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      formatted_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lattitude: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,6)
      },
      longitude: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,6)
      },
      post_office_box: {
        type: Sequelize.STRING
      },
      subpremise: {
        type: Sequelize.STRING
      },
      street_number: {
        type: Sequelize.STRING
      },
      route: {
        type: Sequelize.STRING
      },
      locality: {
        type: Sequelize.STRING
      },
      administrative_area_level_2: {
        type: Sequelize.STRING
      },
      administrative_area_level_1: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      postal_code_suffix: {
        type: Sequelize.STRING
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
        "Place", 
        ["lattitude", "longitude"], 
        { type: "unique" }
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Place");
  }
};