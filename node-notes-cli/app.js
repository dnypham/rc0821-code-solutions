const fs = require('fs');
const notebook = require('./data.json');

const command = process.argv[2];
const ID = notebook.nextId;
const notes = notebook.notes;

function updateNotebook(notebook) {
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

  updateNotebook(notebook);
} else if (command === 'update') {
  if (notes[process.argv[3]]) {
    notes[process.argv[3]] = process.argv[4];
  }

  updateNotebook(notebook);
} else if (command === 'delete') {
  if (notes[process.argv[3]]) {
    delete notes[process.argv[3]];
  }
  updateNotebook(notebook);
}
