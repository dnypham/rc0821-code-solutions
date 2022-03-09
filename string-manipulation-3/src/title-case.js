/* exported titleCase */

function titleCase(title) {
  // Lowercase the title
  // Split string into an array by spaces to separate the words.
  // Loop through each word
  // (1) If the word is 'JavaScript' or 'API' special case.
  // (2) If the word is at index 0, capitalize the first letter and lowercase the rest.
  // (3) If the word length is at least 4, capitalize the first letter and lowercase the rest.
  // (4) Else, lowercase all the letters.
  const minorWordsArray = ['and', 'or', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const lowTitle = title.toLowerCase();
  const titleArray = lowTitle.split(' ');
  const APATitleArray = titleArray.map((word, index) => {
    if (word.includes(':')) {
      const revisedWord = word.replace(':', '');

      if (revisedWord === 'javascript') {
        return 'JavaScript' + ':';
      } else if (revisedWord === 'api') {
        return 'API' + ':';
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }

    } else if (word.includes('-')) {
      const wordArray = word.split('-');
      const revisedWordArray = wordArray.map(word => {
        return word[0].toUpperCase() + word.slice(1);
      });

      return revisedWordArray.join('-');
    } else if (word === 'javascript') {
      return 'JavaScript';
    } else if (word === 'api') {
      return 'API';
    } else if (index === 0 || word.length >= 4 || titleArray[index - 1].includes(':')) {
      return word[0].toUpperCase() + word.slice(1);
    } else if (!minorWordsArray.includes(word)) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  const APATitle = APATitleArray.join(' ');
  return APATitle;
}
