import React from 'react';
import ReactDOM from 'react-dom';

class PokemonList extends React.Component {

  getPokemon() {
    const pokedex = [
      { number: '001', name: 'Bulbasaur' },
      { number: '004', name: 'Charmander' },
      { number: '007', name: 'Squirtle' },
      { number: '025', name: 'Pikachu' },
      { number: '039', name: 'Jigglypuff' }
    ];

    const listItems = pokedex.map(pokemon =>
      <li key={pokemon.number}>{pokemon.name}</li>
    );

    return listItems;
  }

  render() {
    return (
      <ul>{this.getPokemon()}</ul>
    );
  }
}

ReactDOM.render(
  <PokemonList />,
  document.getElementById('root')
);
