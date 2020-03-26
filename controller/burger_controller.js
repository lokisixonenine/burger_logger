const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const burger = require("../models/burger.js")

router.get("/", (req, res) => {
    burger.all((data) => {
        const burgOb = {
            burgers: data,
        };
        res.render("index", burgOb);
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