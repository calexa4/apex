"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Place", [{
        place_type_id: 2,
        is_geocode_partial_match: false,
        formatted_address: "6608 N Western Ave #1092, OKC 73116",
        lattitude: 35.539382,
        longitude: -97.529324,
        subpremise: "1092",
        street_number: "6608",
        route: "N Western Ave",
        locality: "Nichols Hills",
        administrative_area_level_2: "Oklahoma County",
        administrative_area_level_1: "OK",
        country: "US",
        postal_code: "73116",
        postal_code_suffix: "7326",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Place", null, {});
  }
};
