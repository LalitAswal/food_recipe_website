const {connect} = require('./database');

class WritePool {
    constructor(){
        this.pool = connect.promise()
    }
    async query(query, values){
        const result = await this.pool.query(query, values);
        console.log('ressult values is ',result)
        return result[0];

    }
}

class ReadPool {
    constructor(){
        this.pool = connect.promise()
    }
    async query(query,values){
        console.log('cehcking line 20 ', query,values)
        const result = await this.pool.query(query,values);
        console.log('ressult readpool values is ',result[0])

        return result[0]
    }
}
const readpool = new ReadPool();
const writepool = new WritePool();

module.exports ={ readpool, writepool}; 