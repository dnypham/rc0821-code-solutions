const fs = require('fs');
const notebook = require('./data.json');
const express = require('express');
const app = express();
const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/notes', (req, res) => {
  const notesArray = [];

  for (const id in notebook.notes) {
    notesArray.push(notebook.notes[id]);
  }

  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (id < 1 || !Number.isInteger(id)) {
    res.status(400).json({ Error: 'id must be a positive integer.' });
  } else if (notebook.notes[id]) {
    res.status(200).json(notebook.notes[id]);
  } else {
    res.status(404).json({ Error: `Cannot find note with id ${id}. ` });
  }
});

app.post('/api/notes', (req, res) => {
  const content = req.body.content;
  const newNote = req.body;

  if (!content) {
    res.status(400).json({ Error: 'Content is a required field.' });
  } else {
    newNote.id = parseInt(notebook.nextId);
    notebook.notes[newNote.id] = newNote;
    notebook.nextId++;

    fs.writeFile('./data.json', JSON.stringify(notebook, null, 2), err => {
      if (err) {
        res.status(500).json({ Error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (id < 1 || !Number.isInteger(id)) {
    res.status(400).json({ Error: 'id must be a positive integer.' });
  } else if (!notebook.notes[id]) {
    res.status(404).json({ Error: `Cannot find note with id ${id}.` });
  } else {
    delete (notebook.notes[id]);

    fs.writeFile('./data.json', JSON.stringify(notebook, null, 2), err => {
      if (err) {
        res.status(500).json({ Error: 'An unexpected error occurred.' });
      } else {
        res.status(204).json();
      }
    });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
