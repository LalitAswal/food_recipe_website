const express = require('express');
const router = express();
const foodRecipeList = require('../controllers/foodRecipeList.controller');
const searchRecipe = require('../controllers/searchRecipeByRecipeId.controller');
const foodDetails = require('../controllers/foodDetail.controller');
const login = require('../controllers/login.controller');
const authenticate = require('../middleware/authentication');
const logout = require("../controllers/logout");


router.post("/login",
        login);

router.post("/logout",
        logout)        

router.get('/foodRecipeList',
                authenticate,
                foodRecipeList);

router.get('/RecipeList',
                authenticate,
                searchRecipe); 

router.get('/foodDetail',
                authenticate,
                foodDetails)

                
module.exports = router;