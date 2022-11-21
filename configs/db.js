import mysql from 'mysql2' //library that connect us to sql (give api)

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'danidin',
    database: 'shopdb'
})

export default connection