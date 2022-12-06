const axios = require('axios');
const { Op } = require('sequelize');
const { Recipe, Diet } = require('../../db');
const { API_KEY, API_MOCKED } = process.env

const getAllDataBase = async ()=>{
    const recipesInfo = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name']
        }
    });
    
    const recipesFilter = await recipesInfo.map( r => {
        return {
            id: r.id,
            name: r.name,
            healthScore: r.healthScore,
            instructions: r.instructions,
            summary: r.summary,
            diets: r.Diets.map(d => d.name),
            createInDB: r.createInDB
        }
    })

    return recipesFilter;
}

const getAllApi = async ()=>{
    // const recipesInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`).then(response => response.data.results);
    // RECORDAR DESCOMENTAR Y COMENTAR LA DE ABAJO------------------------------------------------------------
    const recipesInfo = await axios.get(API_MOCKED).then(response => response.data.results);

    const recipesFilter = recipesInfo.map( r => {
        return {
            id: r.id,
            name: r.title,
            image: r.image,
            healthScore: r.healthScore,
            diets: r.diets,
            summary: r.summary,
            dishTypes: r.dishTypes,
            instructions: r.analyzedInstructions,
            createInDB: false
        }
    });

    return recipesFilter;
}


const getAllRecipes = async (wordKey)=>{

    const recipesApi = await getAllApi();
    const recipesDb = await getAllDataBase();
    
    if(!wordKey){
        const allRecipes = recipesApi.concat(recipesDb);
        return allRecipes;
    }
    
    const allRecipes =  recipesApi.concat(recipesDb).reduce((arrRecipe, rCurrent) => {

        if(rCurrent.name.toLowerCase().includes(wordKey.toLowerCase())){
            arrRecipe.push(rCurrent);
        }
        return arrRecipe;
    },[]);

    return allRecipes;
}

module.exports = {
    getAllRecipes,
    // getRecipeById
}