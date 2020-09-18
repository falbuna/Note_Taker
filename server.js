var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// These will handle the routes for our application
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// This listener which starts our server
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});