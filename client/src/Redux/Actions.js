import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_BY_DIET = 'GET_RECIPES_BY_DIET';
export const GET_RECIPES_ID = 'GET_RECIPES_ID';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const GET_DIETS = 'GET_DIETS'; 
export const GET_RECIPES_ORDERED = 'GET_RECIPES_ORDERED';
export const GET_SEARCH_RECIPES = 'GET_SEARCH_RECIPES';
export const POST_RECIPE = 'POST_RECIPE';
export const INDEXES =  'INDEXES'

// *****************************************************************************************

export const getAllRecipes = ()=>(
    async function(dispatch){
        try {
            const recipes = (await axios.get('http://localhost:3001/recipes')).data;
            dispatch({ type: GET_RECIPES, payload: recipes });
        } catch (error) {
            console.log(error);
        }
    }
);

export const getRecipesById = (id)=>(
    async function(dispatch){
        try {
            const recipeById = (await axios.get(`http://localhost:3001/recipes/${id}`)).data;
            dispatch({ type: GET_RECIPES_ID, payload: recipeById })
        } catch (error) {
            console.log(error);
        }
    }
);

export const cleanDetail = ()=>{
    return { type: CLEAN_DETAIL, payload:null }
};

export const getDiets = ()=>(
    async function(dispatch){
        try {
            const diets = (await axios.get('http://localhost:3001/diets')).data;
            dispatch({ type: GET_DIETS, payload: diets})
        } catch (error) {
            console.log(error);
        }
    }
);

export const getRecipesByDiet = (diet)=>(
    async function(dispatch){
        try {
            const recipesByDiets = (await axios.get(`http://localhost:3001/recipes/filter?diet=${diet}`)).data;
            dispatch({ type: GET_RECIPES_BY_DIET, payload: recipesByDiets});
        } catch (error) {
            console.log(error);
        }
    }
);

export const getRecipesOrdered = (recipes,ordering)=>{
    const { typeOrder, wayOrder } = ordering;

    if(typeOrder === 'abc'){
        // console.log(ordering)
        if(wayOrder === 'asc'){
            recipes.sort((a,b)=>{
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0
            })
            
        } else if(wayOrder === 'desc'){
            recipes.sort((a,b)=>{
                if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                return 0;
            });
        }

    }else if(typeOrder === 'score'){
        if(wayOrder === 'asc'){
            recipes.sort((a,b)=> b.healthScore - a.healthScore);
        }else if(wayOrder === 'desc'){
            recipes.sort((a,b)=> a.healthScore - b.healthScore);
        }
    }
    
    return { type: GET_RECIPES_ORDERED, payload: recipes }
};

export const getSearchRecipes = (name)=>(
    async function(dispatch){
        try {
            const recipesByName = (await axios.get(`http://localhost:3001/recipes?name=${name}`)).data;
            dispatch({ type: GET_SEARCH_RECIPES, payload: recipesByName});
        } catch (error) {
            console.log(error);
        }
    }
);

export const postRecipe = (recipe) =>(
    async function(dispatch){
        try {
            const createRecipe = (await axios.post('http://localhost:3001/recipes', recipe)).data;
            dispatch({ type: POST_RECIPE, payload: createRecipe });
        } catch (error) {
            console.log(error);
        }
    }
);

export const indexPages = ()=> (
    { type: INDEXES, payload: null }
)


