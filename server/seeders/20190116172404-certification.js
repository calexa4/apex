"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Certification", [{
        source: "API",
        name: "1169",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "API",
        name: "TES",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "API",
        name: "653",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "API",
        name: "510",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "API",
        name: "570",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "NACE",
        name: "CIP Level 1",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "NACE",
        name: "CIP Level 2",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "NACE",
        name: "CIP Level 3",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "NACE",
        name: "CP1",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "NACE",
        name: "CP2",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "NACE",
        name: "CP3",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "NACE",
        name: "CP4",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "AWS",
        name: "CWI",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "NWIS",
        name: "CPWI",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "TSA",
        name: "TWIC",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "ASNT",
        name: "RT Level 2",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString(),
      },
      {
        source: "ASNT",
        name: "MT Level 2",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString(),
      },
      {
        source: "ASNT",
        name: "PT Level 2",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "ASNT",
        name: "VT Level 2",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      },
      {
        source: "PMI",
        name: "PMP",
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Certification", null, {});
  }
};
