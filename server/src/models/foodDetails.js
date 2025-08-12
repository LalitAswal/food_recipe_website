const { readpool } = require('../config/connection');

let foodDetails = async (limit = 10, offset = 0) => {
    try {
        const query = `
            SELECT 
                r.id AS recipe_id,
                r.name AS recipe_name, 
                u.name AS creator_name, 
                r.\`desc\` AS description, 
                r.image_url, 
                i.amount, 
                p.step 
            FROM recipe r
            JOIN user u ON r.creator_id = u.id 
            JOIN ingredients i ON i.recipe_id = r.id 
            JOIN process p ON p.recipe_id = r.id
            ORDER BY r.id DESC
            LIMIT ? OFFSET ?
        `;

        const { rows } = await readpool.query(query, [limit, offset]);
        return { success: true, data: rows };

    } catch (error) {
        console.error("Database query error:", error.message);
        return { success: false, message: "Could not fetch food details" };
    }
};

module.exports = foodDetails;
