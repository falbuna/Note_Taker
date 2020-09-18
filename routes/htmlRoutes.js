var path = require("path");
var express = require("express");

module.exports = function(app){

// This will get the css and javascript files from the assets folder in public    
app.use("/assets", express.static(path.join(__dirname, "../public/assets")));

// This will return the notes page when users visit the page. They will be sent to the notes.html page.
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// This will return the default page when the user visits the page. They wiill be sent to the index.html page.
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

};