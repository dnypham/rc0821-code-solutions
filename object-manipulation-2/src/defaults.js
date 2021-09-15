/* exported defaults */

function defaults(target, source) {

  for (var key in source) {
    console.log(key);
    console.log(source[key]);
    console.log(source.key[key]);
  }
}
