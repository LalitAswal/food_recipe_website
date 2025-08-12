// models/searchByRecipeId.js
const { readpool } = require('../config/connection');

let searchRecipeByRId = async (recipe_id) => {
    const query = `SELECT step FROM process WHERE recipe_id = ?`;

    const [rows] = await readpool.query(query, [recipe_id]);

    if (rows.length > 0) {
        return { data: rows };
    } else {
        throw { data: `No recipe found with ID ${recipe_id}` };
    }
};

module.exports = searchRecipeByRId;
