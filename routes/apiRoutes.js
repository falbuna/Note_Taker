var notesData = require("../db/db.json")


module.exports = function(app){

    let id = 0;

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
        req.body.id = ++id;
        res.json(req.body);
    });
    
    app.delete("/api/notes/:id", function (req, res){
        notesData.length = 0;
        res.json({ ok: true });
    });

}