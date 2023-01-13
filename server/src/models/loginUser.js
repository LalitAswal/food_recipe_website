const connection = require('../config/database');

let userLogin = async(userId, password)=>{
    let query = 'select * from user WHERE user_id=? AND password=?';
    const results = await connection.promise().query(query,[userId,password]);
    return {"data":results[0]}

}

module.exports =userLogin;