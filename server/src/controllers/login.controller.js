var userLogin = require('../models/loginUser');
const jwt = require('jsonwebtoken');

let login = async (req, res) => {
    try {
        const { userId, password } = req.body;

        if (!userId || !password) {
            return res.status(400).json({ message: "Please provide userId and password" });
        }

        const result = await userLogin(userId, password);

        if (!result.success) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const SECRET_KEY = process.env.JWT_SECRET_KEY;
        const expireTime = process.env.JWT_EXPIRE_TIME ;

        const token = jwt.sign(
            { userId: result.user.userId, id: result.user.id },
            SECRET_KEY,
            { expiresIn: expireTime }
        );

        return res.status(200).json({
            message: "Logged in successfully",
            token,
            user: result.user
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = login;
