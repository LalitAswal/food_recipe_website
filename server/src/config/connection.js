const mysql = require('mysql2/promise');

// Primary (write) connection
const writeConnection = mysql.createPool({
    host: process.env.PRIMARY_DB_HOST || 'localhost',
    user: process.env.PRIMARY_DB,
    password: process.env.PRIMARY_DB_PASS,
    database: process.env.PRIMARY_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Replica (read) connection
const readConnection = mysql.createPool({
    host: process.env.REPLICA_DB_HOST ,
    user: process.env.REPLICA_DB,
    password: process.env.REPLICA_DB_PASS,
    database: process.evv.REPLICA_DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = { writeConnection, readConnection };
