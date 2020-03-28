const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

connection.connect((err) => {
    if (err) {
        console.log("error connecting: ");
        return;
    }
    console.log("connected as id ");
});

module.exports = connection;