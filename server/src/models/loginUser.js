const { readpool } = require('../config/database');
const bcrypt = require('bcrypt');

let userLogin = async (userId, password) => {
    try {
        // Fetch only required fields
        const { rows } = await readpool.query(
            'SELECT id, user_id, name, email, password_hash FROM user WHERE user_id = ? LIMIT 1',
            [userId]
        );

        if (!rows.length) {
            return { success: false, message: 'Invalid credentials' };
        }

        const user = rows[0];

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return { success: false, message: 'Invalid credentials' };
        }

        return {
            success: true,
            user: {
                id: user.id,
                userId: user.user_id,
                name: user.name,
                email: user.email
            }
        };

    } catch (error) {
        console.error("Error in userLogin:", error);
        return { success: false, message: 'Server error' };
    }
};

module.exports = userLogin;
