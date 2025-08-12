const { writeConnection, readConnection } = require('./database');

class DBPool {
    constructor(pool) {
        this.pool = pool;
    }

    async query(query, values = []) {
        try {
            const [rows, fields] = await this.pool.query(query, values);
            return { rows, fields };
        } catch (error) {
            console.error(`Database query failed:
                SQL: ${query}
                Params: ${JSON.stringify(values)}
                Error: ${error.message}`);
            throw new Error('Database operation failed');
        }
    }
}

const writepool = new DBPool(writeConnection);
const readpool = new DBPool(readConnection);

module.exports = { readpool, writepool };