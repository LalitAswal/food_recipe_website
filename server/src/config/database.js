let mysql = require('mysql2');

let connect  = mysql.createConnection({
    //  host  : 'localhost',
    host     : '',
    user     : 'root',
    password : 'P@ssw0rd@1',
    database : 'food_recipe'
});


connect.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});


module.exports = connect;

