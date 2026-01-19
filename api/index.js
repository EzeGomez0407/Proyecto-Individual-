const server = require("./src/app.js");
const { getDiets } = require("./src/routes/controllers/getDiets.js");
const { supabase } = require('./supabaseConfig.js')
const { PORT } = process.env;


server.listen(PORT || 3001, async () => {
  // Llamar a esta función si las Dietas se borraron de la base de datos
  // await loaderDiets();
  console.log("Servidor abierto en puerto 3001");
});

async function loaderDiets() {
  try {
    const diets = await getDiets();

    const {data: dietsArr, error} = await supabase.from('Diet').select('name')
    if(error) throw error

    const dietsDB = dietsArr.map(diet => diet.name)
    

    diets.forEach(async (diet) => {
      if(!dietsDB.includes(diet)) {        
        await supabase.from('Diet').insert([{name: diet}])
      }
      return
    });
  } catch (error) {
    console.log(error);
  }
};