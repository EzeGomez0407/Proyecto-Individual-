const { Router } = require('express');
const { Op } = require('sequelize');
const { Recipe } = require('../db')
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
    
        const recipes = await Recipe.findAll({
            where: {
                name: {[Op.like]: `%${name}%`}
            }
        })

        if(recipes.length === 0) throw new Error('No se encontró ninguna receta');

        return res.status(200).send(recipes)
    } catch (error) {
        return res.status(404).send(error.message);
    }

});

router.get('/:id', async (req,res)=>{
/* *******\recipes?name=".....": 
*    *Obtener el detalle de una receta en particular.
*    *Debe traer solo los datos pedidos de la ruta de
*     detalle de receta.
*    *Incluir los tipos de recetas asociados.
***********************************************************/
const {id} = req.params
res.send(`Estas buscando la receta con id: ${id}? Por que? Esta base de datos esta vacia por el momento`)
});

router.post('/', async (req,res)=>{
/* *******\recipes?name=".....": 
*    *Recibe los datos recolectados desde el formulario
*     controlado de la ruta de creacion de recetas por body.
*    *Crea una receta en la base de datos relacionada con
*     sus tipos de dietas.
***********************************************************/
})

module.exports = router;