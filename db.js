const { Pool } = require("pg");

const pool = new Pool({
  // database: process.env.DB_NAME,
  database: "gynger_lending",
});

module.exports = pool;
