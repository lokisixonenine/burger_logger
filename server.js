var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
//var routes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 8080;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engein", "handlebars");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/models/public")));
app.use(methodOverride('_method'))

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.use("/create", routes);

app.listen(PORT, function () {
    console.log("Speak softly and don't breath too hard. I am the port. I am listening on  " + PORT);
});