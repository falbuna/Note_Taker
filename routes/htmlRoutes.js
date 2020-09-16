var path = require("path");
var express = require("express");

module.exports = function(app){

app.use("/assets", express.static(path.join(__dirname, "../public/assets")));

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

};