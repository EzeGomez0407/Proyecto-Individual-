const axios = require('axios');
const { API_KEY } = process.env;

const getDiets = async ()=>{
    const recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=60&addRecipeInformation=true&apiKey=${API_KEY}`)
        .then(response => response.data.results);
    
    const dietsRepeat = await recipes.map( recipe => recipe.diets).flat();

    const diets = await dietsRepeat.reduce((acc,curr)=>{
        !acc.includes(curr) && acc.push(curr)
        return acc
    },[])
        
    return diets;
}

module.exports = {
    getDiets
}