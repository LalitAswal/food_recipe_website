const connection = require('../config/database');


const signUpModel = async(id,name, user_id, password, verify_password, email) =>{
    // console.log('checking controller', id,user_id, name, password, verify_password, email)

    let query =  `INSERT INTO user (id,name, user_id, password, verify_password, email) 
                    values (?,?,?,?,?,?) ` ;
 
    const results = await connection.promise().query(query,[id,name, user_id, password, verify_password, email]);
    return {"data":'Sucessfully register'}




}
module.exports =signUpModel;