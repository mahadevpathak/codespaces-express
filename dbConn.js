const Pool = require("pg").Pool

//console.log("1",Pool)
const pool= new Pool({
    user:"postgres",
    host:"localhost",
    database:"bookstore",
    password:"root",
    port:"5432"
})
//console.log("2",pool);
module.exports = pool;