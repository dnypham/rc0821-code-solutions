/* exported pick */
function pick(source, keys) {
  var object = {};

  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i] && source[key] !== undefined) {
        object[keys[i]] = source[key];
      }
    }
  }

  return object;
}
