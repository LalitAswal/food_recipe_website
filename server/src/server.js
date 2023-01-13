const http = require('http');
const app = require('./app');
const dotenv  = require('dotenv');
// const pool =  require('./config/database')

// setting up config file 
dotenv.config({ path: 'src/config/config.env'})

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);
// pool();
server.listen(PORT, ()=>{
    console.log(`PORT is listening at ${PORT} in ${process.env.NODE_ENV} mode..`);

});