const connection = require("../config/connection.js");
const orm = {
      all: (cb) => {
          connection.query("SELECT * FROM burgers", (err, result) => {
              if (err) throw err;
              cb(result);
          })
      },

      insertOne: (name, cb) => {
          connection.query("INSERT INTO burgers(burger_name, devoured) VALUES ( ?, false)", [name], (err, result) => {
              if (err) throw err;
              cb(result);
          })
      },

      updateOne: (id, cb) => {
          connection.query("UPDATE burgers SET ? WHERE ?", [{
              devoured: true
          }, {
              id: id
          }], (err, result) => {
              if (err) throw err;
              cb(result);
          })
      }
  };

  module.exports = orm;