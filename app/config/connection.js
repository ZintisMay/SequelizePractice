
// Dependencies
var Sequelize = require("sequelize");

// Lists out connection options
var jawsDB = {
        port: 3306,
        host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'iwjydcmc61yddsw1',
        password: "bn0q77sh7ubrq7xz",
        database: "r8x8akzg83i1fek4" 
}

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(jawsDB.database, jawsDB.user, jawsDB.password, {
  host: jawsDB.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;