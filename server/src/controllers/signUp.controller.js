const signUpModel = require('../models/signUp');


const  signUp = async(req, res) =>{
    try {

    let { id,name, user_id, password, verify_password, email} = req.body;
    
    let data = await signUpModel(id,name, user_id, password, verify_password, email);
    res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"data":error})
    }
}

module.exports =signUp;