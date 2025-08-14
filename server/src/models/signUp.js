const { writepool } = require('../config/dbPool');
const bcrypt = require('bcrypt');
const Joi = require('joi'); 

const signUpSchema = Joi.object({
    name: Joi.string().min(2).max(50).trim().required(),
    user_id: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().min(8).max(128).required(),
    email: Joi.string().email().trim().lowercase().required()
});

const signUpModel = async (name, user_id, password, email) => {
    try {
        const { error, value } = signUpSchema.validate({ name, user_id, password, email });
        if (error) {
            throw new Error(error.details[0].message);
        }

        // 2. Check if user exists
        const checkQuery = `SELECT 1 FROM user WHERE user_id = ? OR email = ? LIMIT 1`;
        const { rows: existingUser } = await writepool.query(checkQuery, [value.user_id, value.email]);
        if (existingUser.length > 0) {
            throw new Error('User ID or email already exists');
        }

        // 3. Hash password securely
        const hashedPassword = await bcrypt.hash(value.password, 12);

        // 4. Insert user
        const insertQuery = `
            INSERT INTO user (name, user_id, password, email)
            VALUES (?, ?, ?, ?)
        `;
        const { rows: result } = await writepool.query(insertQuery, [
            value.name,
            value.user_id,
            hashedPassword,
            value.email
        ]);

        return {
            success: true,
            message: 'Successfully registered',
            insertedId: result.insertId || null
        };
    } catch (err) {
        throw new Error(err.message || 'Registration failed');
    }
};

module.exports = signUpModel;
