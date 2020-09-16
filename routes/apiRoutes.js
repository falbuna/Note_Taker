var notesData = require("../db/db.json")
var express = require("express");

module.exports = function(app){

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    app.use(express.static('public'));

    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
    });
    
}