/* exported titleCase */

function titleCase(title) {
  const array1 = title.split(' ');

  const solution = array1.map((word, index) => {

    if ((!word.includes('-')) && (!word.includes(':')) && (index !== 0) && (word === 'in' || word === 'and' || word === 'or' || word === 'nor' || word === 'but' || word === 'a' || word === 'an' || word === 'the' || word === 'as' || word === 'at' || word === 'by' || word === 'for' || word === 'of' || word === 'on' || word === 'per' || word === 'to')) {
      return word;
    } else if ((!word.includes('-')) && (!word.includes(':')) && (word === 'javascript' || word === 'JavaScript')) {
      return 'JavaScript';
    } else if ((!word.includes('-')) && (!word.includes(':')) && (word === 'api' || word === 'API')) {
      return 'API';
    } else if (word.includes('-')) {
      const hyphenArray = word.split('-');
      const test1 = hyphenArray.map((word, index) => {

        const lettersArray = word.split('');

        const solution2 = lettersArray.map((letter, index) => {

          if (index === 0) {
            return letter.toUpperCase();
          } else {
            return letter.toLowerCase();
          }
        });

        console.log(solution2);
        const test2 = solution2.join('');
        console.log(test2);
        return test2;
      });
      console.log(test1);
      test1.splice(1, 0, '-');
      console.log(test1);
      return test1.join('');

    }

    const lettersArray = word.split('');

    const solution2 = lettersArray.map((letter, index) => {

      if (index === 0) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    });

    return solution2.join('');
  });

  const solution3 = solution.join(' ');
  console.log(solution3);
  return solution3;

}
