/* exported defaults */

function defaults(target, source) {

  for (var key in source) {

    Object.assign(target, source);
  }
}
