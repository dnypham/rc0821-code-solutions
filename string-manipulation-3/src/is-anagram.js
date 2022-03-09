/* exported isAnagram */

function isAnagram(firstString, secondString) {
  const first = firstString.replaceAll(' ', '');
  let second = secondString.replaceAll(' ', '');

  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      second = second.replace(first[i], '');
    } else {
      return false;
    }
  }
  return true;
}
