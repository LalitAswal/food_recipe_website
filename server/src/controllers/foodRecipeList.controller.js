let recipeList = require('../models/recipeList');



let foodRecipeList =async(req, res)=>{
    try {
        
        let list = await recipeList();
        return res.status(200).json(list)
    } catch (error) {
        res.status(500).json({"data": error})
    }

}


module.exports = foodRecipeList;