const mysql = require('mysql2');
const Redis = require('ioredis');
const dotenv  = require('dotenv');
dotenv.config({ path: 'src/config/config.env'})


const redisConnect = new Redis({
    socket:{
        host:process.env.REDIS_HOST,
        port:process.env.REDIS_PORT
    }
})

redisConnect.on('connect', ()=>{
    console.log(`redis is connect at port ${process.env.REDIS_PORT}`)
})

redisConnect.on('error', (err)=>{
    console.log(`redis is not connect err : ${err}`)
})


const connect  = mysql.createConnection({
    //  host  : 'localhost',
    host     : '',
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
});


connect.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});


module.exports = {connect,
                redisConnect};

