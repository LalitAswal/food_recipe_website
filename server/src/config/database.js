const { writeConnection, readConnection } = require('./connection');

class DBPool {
    constructor(pool) {
        this.pool = pool;
    }

    async query(sql, params = []) {
        try {
            const [rows, fields] = await this.pool.query(sql, params);
            return { rows, fields };
        } catch (error) {
            console.error(`[DB ERROR]
SQL: ${sql}
Params: ${JSON.stringify(params)}
Error: ${error.stack}`);
            throw error;
        }
    }
}

const writepool = new DBPool(writeConnection);
const readpool = new DBPool(readConnection);

module.exports = { readpool, writepool };