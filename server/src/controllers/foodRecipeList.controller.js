const Joi = require('joi');
const getRecipeList = require('../models/recipeList');

const foodRecipeList = async (req, res) => {
    try {
        const schema = Joi.object({
            limit: Joi.number().integer().min(1).max(50).optional(),
            offset: Joi.number().integer().min(0).optional()
        });

        const { error, value } = schema.validate(req.query);
        if (error) {
            return res.status(400).json({ success: false, message: error.details[0].message });
        }

        const recipes = await getRecipeList(value.limit, value.offset);

        return res.status(200).json({ success: true, data: recipes });

    } catch (err) {
        console.error("Error fetching recipe list:", err.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = foodRecipeList;
