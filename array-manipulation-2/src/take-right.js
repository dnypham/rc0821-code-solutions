/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];

  for (var i = array.length - count; i < array.length; i++) {
    if (array[i] || array[i] === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
