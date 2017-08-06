
// dependencies - npm packages

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//configure express / tell node that we are creating express server
var app = express();

// Sets initial port 
var PORT = process.env.PORT || 8080;

//bodyparser for server to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Router - points server to 'route' files
require("./app/routing/apiRouting.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Listener - effectively starts server and prints in console port 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});