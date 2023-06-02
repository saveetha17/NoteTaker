const express = require('express');

const fs = require('fs');

const path =require('path');

const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/d))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

///public/index.html'