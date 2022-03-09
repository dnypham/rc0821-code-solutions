/* exported reverseWords */

function reverseWords(string) {
  const stringArray = string.split(' ');

  const wordsArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    const lettersArray = stringArray[i].split('');
    lettersArray.reverse();
    const reversedWord = lettersArray.join('');
    wordsArray.push(reversedWord);
  }

  const newString = wordsArray.join(' ');

  return newString;
}
