const { Router } = require('express');
const { Diet } = require('../db');

const router = Router();

router.get('/', async (req,res)=>{
    const diets = await Diet.findAll()

    return res.send(diets)
})

module.exports = router;