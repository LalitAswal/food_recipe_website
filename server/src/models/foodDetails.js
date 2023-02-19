const { readpool } = require('../config/connection');

let foodDetails = async()=>{
    let query = `SELECT recipe.name, user.name, recipe.desc, recipe.image_url, ingredients.amount, process.step 
    FROM recipe 
    JOIN user ON recipe.creator_id = user.id 
    JOIN ingredients ON ingredients.recipe_id = recipe.id 
    JOIN process ON process.recipe_id = recipe.id`;
    const results = await readpool.query(query);
    return {"data":results}

}

module.exports =foodDetails;