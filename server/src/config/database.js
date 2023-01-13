var mysql = require('mysql2');

var connection  = mysql.createConnection({
    //  host  : 'localhost',
    host     : '',
    user     : 'root',
    password : 'P@ssw0rd@1',
    database : 'food_recipe'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});


module.exports = connection;

