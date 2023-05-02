const {connect} = require('./database');
const pool = require('./database');

class WritePool {
    async query(query, values){
        try {
            const result = await pool.query(query, values);
            return result[0];
        } catch (error) {
            throw error;
        }
    }
}

class ReadPool {
    async query(query, values){
        try {
            const result = await pool.query(query, values);
            return result[0];
        } catch (error) {
            throw error;
        }
    }
}
const readpool = new ReadPool();
const writepool = new WritePool();

module.exports ={ readpool, writepool}; 