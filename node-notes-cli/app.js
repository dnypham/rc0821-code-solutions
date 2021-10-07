const fs = require('fs');
const notebook = require('./data.json');

const command = process.argv[2];
const ID = notebook.nextId;
const notes = notebook.notes;

if (command === 'read') {
  for (const property in notes) {
    console.log(`${property}: ${notes[property]}`);
  }
} else if (command === 'create') {
  notes[ID] = process.argv[3];
  notebook.nextId++;

  fs.writeFile('data.json', JSON.stringify(notebook, null, 2), err => {
    if (err) throw err;
  });
} else if (command === 'update') {

} else if (command === 'delete') {

}
