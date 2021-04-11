const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "zuckpa1999",
    host: "localhost",
    port: 5432,
    database: "plantosia"
});

module.exports = pool;
