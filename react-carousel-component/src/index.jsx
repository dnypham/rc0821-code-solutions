import React from 'react';
import ReactDom from 'react-dom';
import Carousel from './carousel';

const pokemon = [
  {
    id: 1,
    name: 'Bulbasaur',
    image: '../images/001.png'
  },
  {
    id: 2,
    name: 'Charmander',
    image: '../images/004.png'
  },
  {
    id: 3,
    name: 'Squirtle',
    image: '../images/007.png'
  },
  {
    id: 4,
    name: 'Pikachu',
    image: '../images/025.png'
  },
  {
    id: 5,
    name: 'Jigglypuff',
    image: '../images/039.png'
  }
];

ReactDom.render(
  <Carousel pokemon={pokemon} />,
  document.getElementById('root')
);
