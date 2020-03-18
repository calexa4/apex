"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("PhoneType", [{
        name: "Mobile",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        name: "Home",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        name: "Office",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        name: "Fax",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      }], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("PhoneType", null, {});
  }
};
