const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "device",
  password: "root",
  port: 5432,
});

const getDevices = (request, response) => {
  pool.query("select * from public.entity", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getDevices,
};
