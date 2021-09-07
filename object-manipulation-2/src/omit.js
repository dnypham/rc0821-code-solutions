/* exported omit */
function omit(source, keys) {
  var object = source;

  for (var key in object) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        delete object.key;
      }
    }
  }
  return object;
}
