module.exports = {
  development: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE,
    host: "dev-rds.apexinspection.com",
    dialect: "postgres",
    operatorsAliases: 0,
    define: {
      freezeTableName: true,
      underscored: true
    }
  },
  test: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE,
    host: "test-rds.apexinspection.com",
    dialect: "postgres",
    operatorsAliases: 0,
    define: {
      freezeTableName: true,
      underscored: true
    }
  },
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE,
    host: "rds.apexinspection.com",
    dialect: "postgres",
    operatorsAliases: 0,
    define: {
      freezeTableName: true,
      underscored: true
    }
  }
}