// import connection.js mySQL
const connection = require("../config/connection.js");

// function to help pass vallues to mySQL 
function toMySQL(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// convert object key/value pairs to SQL 
function objectToMySQL(ob) {
    var arr = [];

// loop through keys and push key/values to a string array
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

// convert array of strings to single string
    return arr.toString();
}

// object for SQL statements
const orm = {
    selectAll: function (tableInput, callback) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    insertOne: function (table, cols, vals, callback) {
        const queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += toMySQL(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    updateOne: function (table, objColVals, condition, callback) {
        const queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objectToMySQL(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    }
};

// export ORM for use by burger controller
module.exports = orm;