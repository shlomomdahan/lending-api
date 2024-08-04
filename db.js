const { Pool } = require("pg");

const pool = new Pool({
  database: "gynger_lending",
});

const verifyConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("Successfully connected to database");
    client.release();
  } catch (err) {
    console.error("Error connecting to database:", err);
  }
};

module.exports = { pool, verifyConnection };
