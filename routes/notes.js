// importing express
const notes =('express').router();

// function that generates UUIDs
const { v4: uuidv4} = require('uuid');

// functions for reading and writing to the Json file
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils')

// API route to GET Route for retreiving all the notes
 notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
 });