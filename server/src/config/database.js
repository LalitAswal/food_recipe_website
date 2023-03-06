const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd@1',
  database: 'food_recipe'
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

module.exports = pool;
