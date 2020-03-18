"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("DocumentType", [{
        file_extension: "pdf",
        mime_type: "application/pdf",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("DocumentType", null, {});
  }
};
