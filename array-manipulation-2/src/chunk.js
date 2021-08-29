/* exported chunk */
function chunk(array, size) {
  var array1 = [];

  for (var i = 0; i < array.length; i += size) {
    array1.push(array.slice(i, i + size));
  }
  return array1;
}
