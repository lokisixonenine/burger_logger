const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
//const routes = require("./controllers/burgers_controller.js");

const app = express();
const PORT = process.env.PORT || 8080;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engein", "handlebars");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/models/public")));
app.use(methodOverride('_method'))

const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.use("/create", routes);

app.listen(PORT, function () {
    console.log("Speak softly and don't breath too hard. I am the port. I am listening on  " + PORT);
});