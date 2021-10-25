fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/158')
  .then(response => response.json())
  .then(data => console.log(data));
