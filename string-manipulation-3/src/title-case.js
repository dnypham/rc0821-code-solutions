/* exported titleCase */

function titleCase(title) {
  const array1 = title.split(' ');
  const array2 = [];

  for (let i = 0; i < array1.length; i++) {
    const wordsArray = array1[i].split('');
    console.log(wordsArray);

    for (let x = 0; x < wordsArray.length; x++) {
      if (x === 0) {
        wordsArray[x].toUpperCase();
      } else {
        wordsArray[x].toLowerCase();
      }
    }
    const newWord = wordsArray.join('');
    array2.push(newWord);
  }

  const newTitle = array2.join(' ');
  console.log(newTitle);
}
