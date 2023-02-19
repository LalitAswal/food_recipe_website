const { readpool } = require('../config/connection');

let searchRecipeByRId = async(recipe_id) =>{
    let query = `select step from process where recipe_id=?`;
    let result = await readpool.query(query,[recipe_id]);
    if (result !==[] && result.length >0){
        return {"data":result}
    }else{

        throw {'data': `no such data with name ${recipe_id}`}
    }

}

module.exports = searchRecipeByRId;