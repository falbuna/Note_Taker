# Note_Taker

Homework for Week 11

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

![]()

To add a note, the user will need to add a title for the note by clicking in the space "Note Title" and text for the note by clicking in the space in "Note Text". Once they add a title and text for a note, the user can press save (computer disc icon on the top right) to save the note.

![]()

All of the saved notes will be stored on the left side of the screen. To view previously saved notes, click on the note on the left side of the screen to display the note. To start a new note, press the pencil icon.

![]()

To delete a note, the user can press the trashcan icon to delete the note.

![]()


## Questions
