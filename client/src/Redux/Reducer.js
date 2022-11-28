import {getAllRecetas} from './Actions';

const initialState = {
    recipes: [],
    recipeSearch: [],
    recipe_detail: {}
}

const rootReducer = (state = initialState, actions)=>{
    switch (actions.type) {
        case 'GET_RECETAS':
            return {
                ...state,
                recipes: actions.payload
            }
            break;
    
        default: return {...state};
    }
}

export default rootReducer;