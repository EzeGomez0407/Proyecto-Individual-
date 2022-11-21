const { Router } = require('express');
const recipeRoutes = require('./recipeRoutes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipeRoutes);

module.exports = router;
