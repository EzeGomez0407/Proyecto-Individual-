const { Router } = require('express');
const { supabase } = require('../../supabaseConfig')
const router = Router();

router.get('/', async (req,res)=>{

    try {
        const {data: diets, error} = await supabase.from('Diet').select('*')

        if(error) throw error

        return res.send(diets)
    } catch (error) {
        return res.status(400).send(error)
    }
})

module.exports = router;