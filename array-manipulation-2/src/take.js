/* exported take */
function take(array, count) {
  var newArray = [];

  for (var i = 0; i < count; i++) {
    if (array[i] || array[i] === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
