"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("User", {
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
      is_registered: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      secret_key: {
        unique: true,
        type: Sequelize.STRING
      },
      password_hash: {
        type: Sequelize.STRING
      },
      session_token: {
        unique: true,
        type: Sequelize.STRING
      },
      session_expiration: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable("User");
  }
};