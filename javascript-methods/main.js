var num1 = 10;
var num2 = 20;
var num3 = 30;
var maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue:', maximumValue);

var heroes = ['Thor', 'Ant Man', 'Batman', 'Star Lord'];
var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Boys in the Boat',
    author: 'Daniel James Brown'
  },
  {
    title: 'The Push: A Climber\'s Search for the Path ',
    author: 'Tommy Caldwell'
  },
  {
    title: 'Can\'t Hurt Me',
    author: 'David Goggins'
  }
];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Raushmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Daniel Pham';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
