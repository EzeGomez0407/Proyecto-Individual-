const { Router } = require('express');
const { Recipe, Diet } = require('../db')
const { getAllRecipes } = require('./controllers/getRecipes')
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
        return res.status(404).send(error.message);
    }  
});

router.get('/filter', async (req,res)=>{
// esta ruta devuelve las recetas filtradas por dieta
//********************************************************
    const { diet } = req.query;

    try {
        const recipesAll = await getAllRecipes();
        const recipes = recipesAll.filter(r => r.diets.includes(diet))

        return res.send(recipes)
    } catch (error) {
        return res.send(error.message);
    }
});

router.get('/:id', async (req,res)=>{
/* *******\/recipes/:{idReceta}
*    *Obtener el detalle de una receta en particular.
*    *Debe traer solo los datos pedidos en la ruta de
*     detalle de receta.
*    *Incluir los tipos de dietas asociados.
***********************************************************/
    const {id} = req.params
    try {
        const allRecipes = await getAllRecipes();

        const recipe = allRecipes.filter(r=> r.id == id);
        recipe.length ? res.send(recipe[0]) :
        res.send('No se encontro la receta');
    } catch (error) {
        return res.status(404).send(error.message);
    }
});

router.post('/', async (req,res)=>{
/* *******\/recipes: 
*    *Recibe los datos recolectados desde el formulario
*     controlado de la ruta de creacion de recetas por body.
*    *Crea una receta en la base de datos relacionada con
*     sus tipos de dietas.
***********************************************************/
    console.log(req.body);
    const { name,
            summary, 
            healthScore,
            instructions,
            createInDB,
            diets,} = req.body;
    try {
        if(!name || !summary) throw new Error('No se proporcionaron todos los datos para la creacion de una receta.');

        const newRecipe = await Recipe.create({
            name,
            summary,
            healthScore,
            instructions: instructions || ['asdaa,asasd'],
            createInDB
        });
        
        const dietsDb = await Diet.findAll({
            where: {name: diets}
        });
        await newRecipe.addDiet(dietsDb);
        
        const recipes = await getAllRecipes();
        console.log(req.body);
        res.status(200).send(recipes);
    } catch (error) {
        return res.send(error.message);
    }
})

module.exports = router;