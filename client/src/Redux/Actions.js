import axios from 'axios'

const GET_RECETAS = 'GET_RECETAS';
const GET_RECETA_ID = 'GET_RECETA_ID';

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

export const getAllRecetas = ()=>{
    return function(dispatch){
        axios.get('http://localhost:3001/recipes')
        .then((response) => response.data)
        .then((data) => dispatch({type: GET_RECETAS, payload: data}));
    }
}