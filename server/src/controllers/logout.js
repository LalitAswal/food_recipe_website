let userLogin = require('../models/loginUser');
const jwt = require('jsonwebtoken');


let logout  =async(req, res)=>{
    try {
        const  SECRET_KEY = process.env.JWT_SECRET_KEY;
        const token = req.headers['authorization'];
        jwt.verify(token, SECRET_KEY, (err) => {
            if (err) {
                return res.status(401).json({ message: 'Token is not valid' });
            }
            req.userId = null;
            res.status(200).json({ message: 'Logout successful' });
    });
}
     catch (error) {
        return res.status(401).json({message:"Logged in failed"})
    }

}

module.exports = logout;