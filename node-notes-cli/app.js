const fs = require('fs');
const notebook = require('./data.json');

const command = process.argv[2];
const ID = notebook.nextId;
const notes = notebook.notes;

function updateNotebook() {
  fs.writeFile('data.json', JSON.stringify(notebook, null, 2), err => {
    if (err) throw err;
  });
}

if (command === 'read') {
  for (const property in notes) {
    console.log(`${property}: ${notes[property]}`);
  }
} else if (command === 'create') {
  notes[ID] = process.argv[3];
  notebook.nextId++;

  updateNotebook();
} else if (command === 'update') {
  for (const property in notes) {
    if (property === process.argv[3]) {
      notes[property] = process.argv[4];
    }
  }

  updateNotebook();
} else if (command === 'delete') {
  for (const property in notes) {
    if (property === process.argv[3]) {
      delete notes[property];
    }
  }
  updateNotebook();
}
