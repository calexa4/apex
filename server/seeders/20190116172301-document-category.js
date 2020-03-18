"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("DocumentCategory", [{
        name: "Driver's License",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("DocumentCategory", null, {});
  }
};
