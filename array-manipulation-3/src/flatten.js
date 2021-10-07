/* exported flatten */

function flatten(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let i = 0; i < array[i].length; i++) {
        newArray.push(array[i]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
