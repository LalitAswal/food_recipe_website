const { writepool } = require('../config/connection');
const bcrypt = require('bcrypt');

const signUpModel = async (name, user_id, password, email) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
        INSERT INTO user (name, user_id, password, email)
        VALUES (?, ?, ?, ?)
    `;

    try {
        await writepool.query(query, [name, user_id, hashedPassword, email]);
        return { success: true, message: 'Successfully registered' };
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            throw new Error('User ID or email already exists');
        }
        throw err;
    }
};

module.exports = signUpModel;
