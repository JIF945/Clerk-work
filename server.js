// imports
const express = require('express');

const path = require('path');

const api = require('./routes/notes');

// port for the server
const PORT = 3001;

const app = express();

// middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// Send all the request that begin with /api  to the notes in the routes folder
app.use('/api, api');

// this view route is a GET route for the notes page
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// this view route is a GET route for the index homepage
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// listening for incoming connection on the specified port
app.listen(PORT, () => 
console.log(`APP listening at http://localhost:${PORT}`)
);

