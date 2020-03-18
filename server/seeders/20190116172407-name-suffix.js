"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("NameSuffix", [{
        suffix: "Jr",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        suffix: "Sr",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        suffix: "II",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        suffix: "III",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        suffix: "IV",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("NameSuffix", null, {});
  }
};
