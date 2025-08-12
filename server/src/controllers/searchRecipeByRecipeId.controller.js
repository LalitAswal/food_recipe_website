// controllers/searchRecipe.js
const searchRecipeByRId = require('../models/searchByRecipeId');

let searchRecipe = async (req, res) => {
    try {
        const { recipe_id } = req.query;

        const result = await searchRecipeByRId(recipe_id);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json(error);
    }
};

module.exports = searchRecipe;
