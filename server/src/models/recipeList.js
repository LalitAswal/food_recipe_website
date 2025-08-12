const { readpool } = require('../config/connection');

const getRecipeList = async (limit = 10, offset = 0) => {
    try {
        const query = `
            SELECT recipe.name AS recipeName, 
                   user.name AS creatorName, 
                   recipe.desc, 
                   recipe.image_url
            FROM recipe
            JOIN user ON recipe.creator_id = user.id
            LIMIT ? OFFSET ?;
        `;

        const [results] = await readpool.query(query, [limit, offset]);
        return results;
        
    } catch (error) {
        console.error("Database error in getRecipeList:", error.message);
        throw new Error("Failed to fetch recipe list");
    }
};

module.exports = getRecipeList;
