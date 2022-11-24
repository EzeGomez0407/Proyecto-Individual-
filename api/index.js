//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Diet } = require('./src/db.js');
const { getDiets } = require('./src/routes/controllers/getDiets.js');


const loaderDiets = async()=>{
  const diets = await getDiets();

  try {
    diets.forEach(async (diet)=>{
      await Diet.findOrCreate({where: {name: diet}})
    });
  } catch (error) {
    console.log(error)
  }
}

// Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001, async () => {

//     await loaderDiets()
//     console.log('Servidor abierto en puerto 3001'); // eslint-disable-line no-console
     
//   });
// });

server.listen(3001, async ()=>{
  conn.sync({force:true});
  await loaderDiets()
  console.log('Servidor abierto en puerto 3001');
})