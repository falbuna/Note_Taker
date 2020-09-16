var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});