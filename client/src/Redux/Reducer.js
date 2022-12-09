import {
    GET_RECIPES,
    GET_DIETS,
    GET_RECIPES_BY_DIET,
    GET_RECIPES_ORDERED,
    GET_SEARCH_RECIPES,
    GET_RECIPES_ID,
    CLEAN_DETAIL,
    POST_RECIPE,
    INDEXES
} from './Actions';

const initialState = {
    recipes: [],
    diets:[],
    recipeSearch: [],
    indexPages: 0,
    recipe_detail: {}
}

const rootReducer = (state = initialState, actions)=>{
    switch (actions.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: actions.payload
            }

        case INDEXES:
            return {
                ...state,
                indexPages: state.recipes.length / 8
            }

        case GET_RECIPES_ID:
            return {
                ...state,
                recipe_detail: actions.payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                recipe_detail: {}
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

        case POST_RECIPE:
            return {
                ...state,
                recipes: actions.payload
            }
        
        default: return {...state};
    }
}

export default rootReducer;