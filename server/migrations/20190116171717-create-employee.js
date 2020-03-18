"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Employee", {
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
      first_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      middle_initial: {
        type: Sequelize.STRING(1)
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name_suffix_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "NameSuffix",
          key: "id"
        }
      },
      nickname: {
        type: Sequelize.STRING
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      ssn: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable("Employee");
  }
};