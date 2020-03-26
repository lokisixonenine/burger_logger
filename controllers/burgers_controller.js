const express = require("express");

const router = express.Router();

// calls the burger.js file that uses db functions
const burger = require("../models/burger.js");

router.get('/', function (req, res) {
    res.redirect('/burgers');
});

// this section creates the routes 
router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/new", function (req, res) {
    console.log(req.body);
    burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function () {
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function (req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect("/burgers");
    });
});

router.delete("/:id", function (req, res) {
    const condition = "id = " + req.params.id;
    burger.delete(condition, function () {
        res.redirect("/burgers");
    });
});

// export routes to server.js 
module.exports = router;