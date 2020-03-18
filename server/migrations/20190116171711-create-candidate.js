"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Candidate", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      person_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: "Person",
          key: "id"
        }
      },
      tagline: {
        allowNull: false,
        type: Sequelize.STRING
      },
      summary: {
        allowNull: false,
        type: Sequelize.STRING
      },
      highlighted_xp_description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      highlighted_xp_company: {
        allowNull: false,
        type: Sequelize.STRING
      },
      highlighted_xp_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      zipcode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      is_available: {
        allowNull: false,
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Candidate");
  }
};