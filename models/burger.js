const orm = require("../config/orm.js");

const burger = {
    selectAllBurgers: function(cb) {
        orm.selectAllBurgers(function(res){
            cb(res);
        })
    },

    createBurger: function (name, cb){
        orm.createBurger(name,function(res) {
            cb(res);
        });
    },

    updateBurger: function (id, cb) {
        orm.updateBurger(id, function (res){
            cb(res);
        });
    }

};

module.export = burger;
