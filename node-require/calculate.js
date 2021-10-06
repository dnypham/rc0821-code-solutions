const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus' || process.argv[3] === '+') {
  console.log(`result: ${add(parseFloat(process.argv[2]), parseFloat(process.argv[4]))}`);
} else if (process.argv[3] === 'minus' || process.argv[3] === '-') {
  console.log(`result: ${subtract(parseFloat(process.argv[2]), parseFloat(process.argv[4]))}`);
} else if (process.argv[3] === 'times' || process.argv[3] === 'x') {
  console.log(`result: ${multiply(parseFloat(process.argv[2]), parseFloat(process.argv[4]))}`);
} else if (process.argv[3] === 'over' || process.argv[3] === '/') {
  console.log(`result: ${divide(parseFloat(process.argv[2]), parseFloat(process.argv[4]))}`);
}
