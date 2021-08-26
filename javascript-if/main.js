/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  var underFive = (number < 5);
  return underFive;
}

function isEven(number) {
  var even = (number % 2 === 0);
  return even;
}

function startsWithJ(string) {
  var character = (string[0] === 'J');
  return character;
}

function isOldEnoughToDrink(person) {
  var legal = (person.age >= 21);
  return legal;
}

function isOldEnoughToDrive(person) {
  var legal = (person.age >= 16);
  return legal;
}

function isOldEnoughToDrinkAndDrive(person) {
  var legal = false;
  return legal;
}

function categorizeAcidity(pH) {
  if (pH <= 14 && pH > 7) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}
