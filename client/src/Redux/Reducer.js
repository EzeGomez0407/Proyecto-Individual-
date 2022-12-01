import { GET_RECIPES, GET_DIETS, GET_RECIPES_BY_DIET, GET_RECIPES_ORDERED, GET_SEARCH_RECIPES } from './Actions';

const initialState = {
    recipes: [],
    diets:[],
    recipeSearch: [],
    // recipeByDiet: [],
    recipe_detail: {}
}

const rootReducer = (state = initialState, actions)=>{
    switch (actions.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: actions.payload
            }
        
        case GET_DIETS: 
            return {
                ...state,
                diets: actions.payload
            }

        case GET_RECIPES_BY_DIET:
            return {
                ...state,
                recipes: actions.payload
            }
        case GET_RECIPES_ORDERED:
            return {
                ...state,
                recipes: actions.payload
            }
        case GET_SEARCH_RECIPES:
            return {
                ...state,
                recipes: actions.payload
            }
        
        default: return {...state};
    }
}

export default rootReducer;