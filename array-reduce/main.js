const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousNumber, currentNumber) => previousNumber + currentNumber);

console.log('Sum of all numbers:', sum);

const product = numbers.reduce((previousNumber, currentNumber) => previousNumber * currentNumber);

console.log('Product of all numbers:', product);

const balance = account.reduce((previousTransaction, currentTransaction) => {
  if (currentTransaction.type === 'deposit') {
    return previousTransaction + currentTransaction.amount;
  } else {
    return previousTransaction - currentTransaction.amount;
  }
}, 0);

console.log('Balance:', balance);

const composite = traits.reduce((previousTrait, currentTrait) => Object.assign(previousTrait, currentTrait));

console.log('Composite:', composite);
