const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const routes = require("./controllers/burgers_controller.js");

const app = express();

const bodyParser = require("body-parser");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(routes);

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


app.listen(PORT, function () {
    console.log("Speak softly and don't breath too hard. I am the port. I am listening on  " + PORT);
});