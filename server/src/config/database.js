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


module.exports = {connect,
                redisConnect, 
pool};


