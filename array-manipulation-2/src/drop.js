/* exported drop */
function drop(array, count) {
  var newArray = [];

  for (var i = count; i < array.length; i++) {
    if (array[i] || array[i] === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
