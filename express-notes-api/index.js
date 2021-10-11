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
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (notebook.notes[id].content) {
    res.status(200).json(notebook.notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${req.params.id} ` });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
