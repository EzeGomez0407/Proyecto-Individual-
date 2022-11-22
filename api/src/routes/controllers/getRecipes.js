const axios = require('axios');
const { Op } = require('sequelize');
const { Recipe } = require('../../db');
const { API_KEY } = process.env

const getAllRecipes = async (wordKey)=>{

    const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${wordKey}&apiKey=${API_KEY}`).then(response => response.data.results);
    
    const recipesDb = await Recipe.findAll({
        where: { name: {[Op.iLike]: `%${wordKey}%`}}
    })

    const allRecipes = recipesApi.concat(recipesDb);
    return allRecipes;
}

const getRecipeById = async (id)=>{
    let recipeById = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        .then(response => response.data)
        .then(recipe => {
            return {
                id: recipe.id,
                name: recipe.title,
                imamge: recipe.image,
                healthScore: recipe.healthScore,
                diets: recipe.diets,
                summary: recipe.summary
            }
        })

    if(!recipeById){
        recipeById = await Recipe.findByPk(id);
    }

    return recipeById;
}

module.exports = {
    getAllRecipes,
    getRecipeById
}