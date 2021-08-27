/* exported toObject */
function toObject(keyValuePair) {
  var newObject = {
    [keyValuePair[0]]: keyValuePair[1]
  };
  return newObject;
}
