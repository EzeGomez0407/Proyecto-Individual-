const { Router } = require('express');
// const { Recipe, Diet } = require('../db');
const { supabase } = require('../../supabaseConfig')
const { getAllRecipes } = require('./controllers/getRecipes');

const router = Router();

router.get('/', async (req,res)=>{
/* *******\recipes?name=".....": 
*   *Obtener un listado de las recetas que contengan 
*     la palabra ingresada como query parameter.
*    *Si no existe ninguna receta mostrar el mensaje
*     adecuado.
***********************************************************/
    const {name} = req.query;   
    try {
        const recipes = await getAllRecipes(name);
        
        !recipes.length ?
        res.send('No se encontraron Recetas'):
        res.send(recipes);
        return
    } catch (error) {
        return res.status(400).send(error.message);
    }  
});

router.get('/filter', async (req,res)=>{
// esta ruta devuelve las recetas filtradas por dieta
//********************************************************
    const { diet } = req.query;

    try {
        const recipesAll = await getAllRecipes();
        const recipes = recipesAll.filter(r => r.diets.includes(diet))

        // !recipes.length ? res.send('No existen recetas con esas dietas') :
        res.send(recipes);
        return
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

router.get('/:id', async (req,res)=>{
/* *******\/recipes/:{idReceta}
*    *Obtener el detalle de una receta en particular.
*    *Debe traer solo los datos pedidos en la ruta de
*     detalle de receta.
*    *Incluir los tipos de dietas asociados.
***********************************************************/
    const {id} = req.params;
    try {
        const allRecipes = await getAllRecipes();

        const recipe = allRecipes.filter(r=> r.id == id);
        recipe.length ? res.send(recipe[0]) :
        res.send('No se encontro la receta');
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

router.post('/', async (req,res)=>{
    console.log('hola');
    
/* *******\/recipes: 
*    *Recibe los datos recolectados desde el formulario
*     controlado de la ruta de creacion de recetas por body.
*    *Crea una receta en la base de datos relacionada con
*     sus tipos de dietas.
***********************************************************/
    
    const { name,
            summary, 
            healthScore,
            instructions,
            createInDB,
            diets,} = req.body;
    try {
        console.log(createInDB);
        
        if(!name || !summary || !healthScore) return res.send('No se proporcionaron todos los datos para la creacion de una receta.');
        
        const {data:newRecipe, error} = await supabase.from('Recipe').insert([{
            name,
            summary,
            healthScore,
            instructions: instructions,
            createInDB,
            diets
        }]);
        if(error) throw error

        console.log(newRecipe);
        
        const recipes = await getAllRecipes();
        res.status(200).send(recipes);
    } catch (error) {
        console.log(error);
        
        return res.status(400).send(error);
    }
})

module.exports = router;