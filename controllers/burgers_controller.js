var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", (req, res) => {
    burger.selectAllBurgers((data) => {
        var burgOb = {
            burgers: data,
        };
        res.render("index", burgOb);
    })

})

router.post("/burgers/create", (req, res) => {
    burger.createBurger(
        req.body.new_burger,
        (result) => {
            res.redirect("/");
        })
})

router.put("/burgers/:id", (req, res) => {
    burger.updateBurger(
        req.params.id,
        (result) => {
            res.redirect("/")
        })
})

module.exports = router;