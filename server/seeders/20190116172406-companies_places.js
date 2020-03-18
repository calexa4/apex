"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Companies_Places", [{
        company_id: 1,
        place_id: 1,
        is_primary: true,
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Companies_Places", null, {});
  }
};
