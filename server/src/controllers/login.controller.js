let userLogin = require('../models/loginUser');
const jwt = require('jsonwebtoken');


let login  =async(req, res)=>{
    try {
        
        let { userId, password} = req.body   
        if(!userId || !password){
            return res.status(400).json({message:" Please enter the correct userId and password"})
        }     
        let result = await userLogin(userId, password);
        if(result.data[0].id){
            const expireTime = process.env.JWT_EXPIRE_TIME;
            const SECRET_KEY= process.env.JWT_SECRET_KEY;
            const token = jwt.sign({ userId }, SECRET_KEY,
                {expiresIn:expireTime });
            return res.status(200).json({message : "Logged in successfully", token:token})
        }
        return res.status(401).json({message:"Logged in failed"})
    } catch (error) {
        res.status(401).json({message: "userId or password incorrect"})
    }

}


module.exports = login;