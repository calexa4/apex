"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Person", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM("M", "F")
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Company",
          key: "id"
        }
      },
      job_title: {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Person");
  }
};