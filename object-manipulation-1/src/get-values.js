/* exported getValues */
function getValues(object) {
  var newArray = [];

  for (var value in object) {
    newArray.push(object[value]);
  }
  return newArray;
}
