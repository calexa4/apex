"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("PlaceType", [{
        name: "Home",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        name: "Mailing",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        name: "Business",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      }], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("PlaceType", null, {});
  }
};
