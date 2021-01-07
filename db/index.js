const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "investree",
  host: "localhost",
  database: "latihan",
  port: 5433,
});

module.exports = pool;
