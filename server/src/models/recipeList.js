const connection = require('../config/database');

let recipeList = async()=>{
    let query = 'select recipe.name ,user.name  ,recipe.`desc` ,recipe.image_url  from recipe  JOIN user on recipe.creator_id=user.id';
    const results = await connection.promise().query(query);
    return {"data":results[0]}

}

module.exports =recipeList;