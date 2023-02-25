const {readpool} = require('../config/connection');

let userLogin = async(userId, password)=>{
    let query = 'select * from user WHERE user_id=? AND password=?';
    const results = await readpool.query(query,[userId, password]);
    return {"data":results}

}

module.exports =userLogin;