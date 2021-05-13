// const Sequelize = require('sequelize');

// const db = new Sequelize('weather', 'root', '',  {
//   dialect: 'mysql',
//   define: {
//     timestamps: false
//   }
// })

// const weatherSQL = db.define('weatherSQL', {
//   hi: Sequelize.INTEGER,
//   low: Sequelize.INTEGER,
//   img: Sequelize.STRING
// })

// weatherSQL.sync().then(() => {
//   weatherSQL.bulkCreate()
// })