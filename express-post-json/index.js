const express = require('express');
const app = express();
const parse = express.json();

app.use(parse);

let nextId = 1;

const grades = {};

app.get('/api/grades', function (req, res) {
  const gradesArray = [];

  for (const id in grades) {
    gradesArray.push(grades[id]);
  }

  res.json(grades);
});

app.post('/api/grades', function (req, res) {

  req.body.id = nextId;
  req.body.score = parseInt(req.body.score);
  grades[nextId] = req.body;
  nextId++;
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
