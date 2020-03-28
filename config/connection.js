const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "rxfnk85so4zf226o",
        password: "uma9eb56sd22cqx3",
        database: "uvofjgqel2el6gxh"
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