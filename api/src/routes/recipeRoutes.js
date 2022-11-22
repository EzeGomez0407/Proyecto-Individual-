const { Router } = require('express');
const { Recipe, TypeDiet_ofRecipe } = require('../db')
const { getAllRecipes, getRecipeById } = require('./controllers/getRecipes')
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
        if (!recipes.length) throw new Error('no se encontraron recetas')
        return res.status(200).send(recipes);
    } catch (error) {
        return res.status(404).send(error.message);
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
        const recipe = await getRecipeById(id)
        return res.status(200).send(recipe);
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
    const { name, summary } = req.body;
    try {
        if(!name || !summary) throw new Error('No se proporcionaron todos los datos para la creacion de una receta.');
        const newRecipe = await Recipe.create(req.body);
        // TypeDiet_ofRecipe.addRecipes(newRecipe);
        res.status(200).send(newRecipe);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

module.exports = router;