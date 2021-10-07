/* exported equal */

function equal(first, second) {
  for (let i = 0; i < first.length; i++) {
    for (let i = 0; i < second.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
}
