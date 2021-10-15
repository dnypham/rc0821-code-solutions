const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgress://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    SELECT *
      FROM grades;
  `;

  db.query(sql)
    .then(data => {
      const grades = data.rows;

      res.json(grades);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Get grades error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  const { course, name, score } = req.body;

  if (!name) {
    res.status(400).json({ error: 'Invalid name' });
    return;
  } else if (!course) {
    res.status(400).json({ error: 'Invalid course' });
    return;
  } else if (!score) {
    res.status(400).json({ error: 'Invalid score' });
    return;
  } else if (score < 0 || score > 100) {
    res.status(400).json({ error: 'Score must be an integer from 0 to 100' });
    return;
  }

  const sql = `
    INSERT INTO "grades" ("name", "course", "score")
         VALUES ($1, $2, $3)
      RETURNING *;
  `;
  const params = [name, course, score];

  db.query(sql, params)
    .then(data => {
      const [grade] = data.rows;

      res.status(201).json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Post grades error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  const { course, name, score } = req.body;

  if (gradeId < 1 || !Number.isInteger(gradeId)) {
    res.status(400).json({ error: `gradeId: ${gradeId} is invalid` });
    return;
  } else if (!name) {
    res.status(400).json({ error: 'Invalid name' });
    return;
  } else if (!course) {
    res.status(400).json({ error: 'Invalid course' });
    return;
  } else if (!score) {
    res.status(400).json({ error: 'Invalid score' });
    return;
  } else if (score < 0 || score > 100) {
    res.status(400).json({ error: 'Score must be an integer from 0 to 100' });
    return;
  }

  const sql = `
    UPDATE "grades"
       SET "name"    = $1,
           "course"  = $2,
           "score"   = $3
     WHERE "gradeId" = $4
    RETURNING *
  `;
  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(data => {
      const [grade] = data.rows;

      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId: ${gradeId}` });
        return;
      }

      res.json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Put grades error:', err);
      res.status(500).json({ Error: 'An unexpected error occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);

  if (gradeId < 1 || !Number.isInteger(gradeId)) {
    res.status(400).json({ error: `gradeId: ${gradeId} is invalid` });
    return;
  }

  const sql = `
    DELETE FROM "grades"
          WHERE "gradeId" = $1
    RETURNING *;
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(data => {
      const [grade] = data.rows;
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId: ${gradeId}` });
        return;
      }

      res.status(204).json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Delete grade error', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT:3000');
});
