var connection = require("../config/connection.js");
var orm = {
      selectAllBurgers: (cb) => {
          connection.query("SELECT * FROM burgers", (err, result) => {
              if (err) throw err;
              cb(result);
          })
      },

      insert: (name, cb) => {
          connection.query("INSERT INTO burgers(burger_name, devoured) VALUES ( ?, false)", [name], (err, result) => {
              if (err) throw err;
              cb(result);
          })
      },

      update: (id, cb) => {      
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
