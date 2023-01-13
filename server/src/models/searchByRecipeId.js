const connection = require('../config/database');

let searchRecipeByRId = async(recipe_id) =>{
    let query = `select step from process where recipe_id=?`;
    let result = await connection.promise().query(query,[recipe_id]);
    if (result[0] !==[] && result[0].length >0){
        return {"data":result[0]}
    }else{

        throw {'data': `no such data with name ${recipe_id}`}
    }

}

module.exports = searchRecipeByRId;