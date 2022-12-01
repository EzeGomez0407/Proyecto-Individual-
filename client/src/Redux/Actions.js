import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_BY_DIET = 'GET_RECIPES_BY_DIET';
export const GET_RECIPES_ID = 'GET_RECIPES_ID';
export const GET_DIETS = 'GET_DIETS'
export const GET_RECIPES_ORDERED = 'GET_RECIPES_ORDERED'
export const GET_SEARCH_RECIPES = 'GET_SEARCH_RECIPES'
// Todo esto sera de prueba******************************************************
// let idNum = 1;

// const idIncr = ()=> idNum++;

// export const getAllRecetas = ()=>{
//     return [
//         {
//             id: idIncr(),
//             name: `Primer pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `guiso de arroz`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `guiso de arroz`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `guiso de arroz`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `guiso de arroz`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `guiso de arroz`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `guiso de arroz`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `guiso de arroz`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `guiso de arroz`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `guiso de arroz`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `guiso de arroz`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `Estofado`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `Estofado`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `Estofado`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `Estofado`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `Estofado`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `Estofado`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `Estofado`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `Estofado`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `Estofado`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//         {
//             id: idIncr(),
//             name: `pure de papa`,
//             img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2021/10/pure-de-papa.jpg',
//             diets: 'Vegetariana, libre de lacteo, vegana'
//         },
//     ]
// }
// *****************************************************************************************

export const getAllRecipes = ()=>(
    function(dispatch){
        axios.get('http://localhost:3001/recipes')
            .then((response) => response.data)
            .then((data) => dispatch({ type: GET_RECIPES, payload: data }));
    } 
)

export const getDiets = ()=>(
    function(dispatch){
        axios.get('http://localhost:3001/diets')
            .then((response) => response.data)
            .then((data) => dispatch({ type: GET_DIETS, payload: data }));
    }
);

export const getRecipesByDiet = (diet)=>(
    function(dispatch){
        axios.get(`http://localhost:3001/recipes/filter?diet=${diet}`)
            .then((response) => response.data)
            .then((data) => dispatch({ type: GET_RECIPES_BY_DIET, payload: data }))
    }
);

export const getRecipesOrdered = (recipes,ordering)=>{
    const { abc, score } = ordering;
    /* 
    abc: {
        order: A-z || Z-a
        on: false || true
    }
    score: {
        order: Mayor || Menor
        on: false || true
    }
     */
    if(abc.on){
        // console.log(ordering)
        if(abc.order === 'A-z'){
            recipes.sort((a,b)=>{
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0
            })
            
        } else if(abc.order === 'Z-a'){
            recipes.sort((a,b)=>{
                if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                return 0;
            });
        }

    }else if(score.on){
        if(score.order === 'Mayor'){
            recipes.sort((a,b)=> b.healthScore - a.healthScore);
        }else if(score.order === 'Menor'){
            recipes.sort((a,b)=> a.healthScore - b.healthScore);
        }
    }
    
    return { type: GET_RECIPES_ORDERED, payload: recipes}
}

export const getSearchRecipes = (word)=>(
    function (dispatch){
        axios.get(`http://localhost:3001/recipes?name=${word}`)
            .then((response) => response.data)
            .then((data) => dispatch({ type: GET_SEARCH_RECIPES, payload: data }))
    }
)