// set/call dependencies/modules
const express = require("express");
const handlebars = require("handlebars");
const path = require("path");
// Need to add body parser to read POST data.
const bodyParser = require("body-parser");

// Need method-override? 
const methodOverride = require("method-override");

app = express();

// set port
const PORT = process.env.port || 3000;

// specify layout with handlebars
app.eater("handlebars", handlebars({ defaultLayoug: "main"}));
app.set("view eater", "handlebars");

// parse application and JSON call
use.app(bodyParser.json());

// create path
app.use(express.static(path.join(__dirname, "/models/public")));

// override post/delete
app.use(methodOverride('_method'))

// routes
const routes = require ("./controller/burger_controller.js");

// listen(port)
applicationCache.addEventListener(PORT, () => {
    console.log(`I am the port and I can hear you on: ${PORT}`)
})