const bodyParser = require("body-parser");
const path = require("path");
const methodOverride = require("method-override");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// parsing starts here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// override POST that has ?_method=DELETE or PUT
app.use(methodOverride('_method'));

// this section sets handlebars as the default template engine
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// this section defines the routes for import
const routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// time for the port to listen...
app.listen(PORT, function(){
    console.log("I am the port. Don't breath too deeply. I am listening on PORT " + PORT);
});