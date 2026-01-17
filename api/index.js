const server = require("./src/app.js");
// const { conn, Diet } = require("./src/db.js");
const { getDiets } = require("./src/routes/controllers/getDiets.js");
const { supabase } = require('./supabaseConfig.js')
const { PORT } = process.env;
/* 
const loaderDiets = async () => {
  try {
    
    const diets = await getDiets();
    const {data: dietsDB, error} = await supabase.from('Diet').select('name')

    if(error) throw error

    diets.forEach(async (diet) => {
      // await Diet.findOrCreate({ where: { name: diet } });
      if(!dietsDB.includes(diet)) {
        await supabase.from('Diet').insert([{name: diet}])
      }
      return
    });
  } catch (error) {
    console.log(error);
  }
}; */

// Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001, async () => {

//     await loaderDiets()
//     console.log('Servidor abierto en puerto 3001'); // eslint-disable-line no-console

//   });
// });

server.listen(PORT || 3001, async () => {
  // await loaderDiets();
  console.log("Servidor abierto en puerto 3001");
});
