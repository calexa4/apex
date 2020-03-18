"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Company", [{
        name: "APEX",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      }], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Company", null, {});
  }
};
