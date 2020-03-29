const express = require("express");
const router = express.Router();

var burger = require("../models/burger.js")

router.get("/", (req, res) => {
    burger.all((data) => {
        var burgOb = {
            burgers: data,
        };
        res.render("index", burgOb);
    })

})

router.post("/burgers/create", (req, res) => {
    burger.create(
        req.body.new_burger,
        (result) => {
            res.redirect("/");
        })
})

router.put("/burgers/:id", (req, res) => {
    burger.update(
        req.params.id,
        (result) => {
            res.redirect("/")
        })
})

module.exports = router;