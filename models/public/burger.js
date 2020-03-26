const orm = require("../config/orm.js");

const burger = {
    selectAllBurgers: function(callback) {
        orm.selectAllBurgers("burgers", callback);
    },

    insertBurger: function (cols, vals, callback){
        orm.insertBurger('burgers', cols, vals, function(res) {
            callback(res);
        });
    },

    updateBurger: function (objColvals, condition, callback) {
        orm.updateBurger("burgers", objColvals, condition, function (res){
            callback(res);
        });
    }

};

module.export = Burger;
