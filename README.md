# Note_Taker

Homework for Week 11

The Note Taker application can be found here: [https://tranquil-peak-61226.herokuapp.com/](https://tranquil-peak-61226.herokuapp.com/)

## Introduction

This application uses an express backend to save and retrieve note data from a JSON file. The application will alllow users to create and save notes, view previously saved notes, and delete previously saved notes.

## Table of Contents
* [Description](#Description)
* [Usage](#Usage)
* [Questions](#Questions)

## Description

The application uses express to connect the backend and the frontend of the code. The server.js file sets up the ports, listener, and handles the routes for the application. The htmlRoutes.js file will tell the application where to find the static assets files and return the user to different pages of the application. The apiRoutes.js file will tell the application how to get (view), post (save), or delete (delete) notes from the file that saves the data for the notes (db.json).

## Usage

When the user first visits the deployed application, this is what they will see. To start taking notes, the user will need to click on "Get Started".

![Home page for the Note Taker application](https://github.com/falbuna/Note_Taker/blob/master/Assets/NoteTaker.png)

To add a note, the user will need to add a title for the note by clicking in the space "Note Title" and text for the note by clicking in the space in "Note Text". Once they add a title and text for a note, the user can press save (computer disc icon on the top right) to save the note.

![First note for the application.](https://github.com/falbuna/Note_Taker/blob/master/Assets/FirstNote.png)

All of the saved notes will be stored on the left side of the screen. To view previously saved notes, click on the note on the left side of the screen to display the note. To start a new note, press the pencil icon.

![Viewing the saved notes.](https://github.com/falbuna/Note_Taker/blob/master/Assets/SavedNotes.png)

To delete a note, the user can press the trashcan icon to delete the note.

![Deleting a saved note.](https://github.com/falbuna/Note_Taker/blob/master/Assets/DeletedNote.png)

## Questions

If you have any questions regarding this application, please reach me at: falbuna1@gmail.com

My Github can be found here: [https://github.com/falbuna/](https://github.com/falbuna/)