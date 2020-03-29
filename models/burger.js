var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all(function (res) {
            cb(res);
        })
    },

    create: function (name, cb){
        orm.create(name,function(res) {
            cb(res);
        });
    },

    update: function (id, cb) {
        orm.update(id, function (res){
            cb(res);
        });
    }

};

module.export = burger;
