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

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
