const fs = require("fs");
const path = require("path");
// The path for the db.json file.
const notesData = require("../db/db.json");

const scriptPath = __dirname;
const filePath = path.join(scriptPath, '../db/db.json');

module.exports = function(app){

    // This will start the id at 0 which we will utilize to keep track of the id of the saved notes.
    let id = 0;

    // This will read the the db.json file and return all the saved notes.
    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    // When the user inputs data into the notes fields, they will be able to save and push the data to the db.json file.
    app.post("/api/notes", function(req, res) {
        // The notes data will be pushed to the body of the request (req.body) in db.json.
        notesData.push(req.body);
        // An id will be created and incremented and added to the req.body for noatesData.
        req.body.id = ++id;
        res.json(req.body);
        // This will write the notesData into the db.json file.
        fs.writeFileSync(filePath, JSON.stringify(notesData));
    });
    
    // This will handle when the user deletes a saved note.
    app.delete("/api/notes/:id", function (req, res){
        // The note that is clicked with the request parameters id.
        let clickedID = req.params.id;

        // The index of the note with the data and the id
        let index = notesData.findIndex((data) => data.id == clickedID);

        // This will remove the note with the clicked index and id
        notesData.splice(index, 1);

        fs.writeFileSync(filePath, JSON.stringify(notesData));

        res.json({ ok: true });
    });
}