var books = [
  {
    isbn: '978-0735214484',
    title: 'Range: Why Generalists Triumph in a Specialized World',
    author: 'David Epstein'
  },
  {
    isbn: '978-0316017930',
    title: 'Outliers: The Story of Success',
    author: 'Malcolm Gladwell'
  },
  {
    isbn: '978-0735211292',
    title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear'
  }
];

console.log('Type of books:', typeof books);
console.log('Array:', books);

var string1 = JSON.stringify(books);

console.log('Type of:', typeof string1);
console.log('JSON string:', string1);

var string2 = '{"id":"938274","name":"Clayton Kershaw"}';

console.log('Type of:', typeof string2);
console.log('JSON string:', string2);

var object = JSON.parse(string2);

console.log('Type of:', typeof object);
console.log('Object:', object);
