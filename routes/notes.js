// importing express
const notes = require('express').Router();

// function that generates UUIDs
const { v4: uuidv4} = require('uuid');

// functions for reading and writing to the Json file
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const { json } = require('body-parser');

// API route to GET Route for retreiving all the notes
 notes.get('/routes/notes.js', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
 });

 

//  get route for specific note
  notes.get('/notes',(req, res) => {
    console.log('get notes')
    const id = req.params.id;
     readFromFile('./db/db.json')
     .then((data) => json.parse(data)) 
      console.log('data',data)
     .then((json) => {
        const result = json.filter((note) => note.id === id);
        return result.length > 0
        ? res.json(result)
        : res.json('no id found');
     });
  });

//   delete route for specific note
  notes.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
     readFromFile('./db/db.json')
     .then((data) => json.parse(data))
     .then((json) => {

        // new array
        const result = json.filter((note) => note.id !== id);

    // array writes to file
    writeToFile('./db/db.json', resut);

    // delete request
    res.json(`Item ${id} deleted`)

  });
});

// post route
notes.post('/notes',(req, res) => {
  const{title, text } = req.body;
  if(req.body){
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };


    readAndAppend(newNote, './db/db.json');
    res.json('note added ');
  } else {
    res.error('error unable to add note')
  }
});

module.exports = notes;
