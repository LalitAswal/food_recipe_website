const signUpModel = require('../models/signUp');
const Joi = require('joi');

const signUp = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        user_id: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().min(6).required(),
        verify_password: Joi.ref('password'),
        email: Joi.string().email().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }

    try {
        const { name, user_id, password, email } = req.body;
        const result = await signUpModel(name, user_id, password, email);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

module.exports = signUp;
