import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_BY_DIET = 'GET_RECIPES_BY_DIET';
export const GET_RECIPES_ID = 'GET_RECIPES_ID';
export const GET_DIETS = 'GET_DIETS'

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