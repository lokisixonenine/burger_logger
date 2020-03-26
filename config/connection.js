const mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
    conneciton = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "brugers_db"
    })
};

connection.connect((err)=> {
    if (err){
        console.log('error connecting to db');
        return;
    }
    console.log('connected to db');
})

modules.exports = connection;
