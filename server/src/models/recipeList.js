const { readpool } = require('../config/connection');

let recipeList = async()=>{
    let query = 'select recipe.name ,user.name  ,recipe.`desc` ,recipe.image_url  from recipe  JOIN user on recipe.creator_id=user.id';
    const results = await readpool.query(query);
    return {"data":results}

}

module.exports =recipeList;