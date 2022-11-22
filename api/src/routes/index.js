const { Router } = require('express');
const recipeRoutes = require('./recipeRoutes');
const dietsRoutes = require('./dietsRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipeRoutes);
router.use('/diets', dietsRoutes)

module.exports = router;
