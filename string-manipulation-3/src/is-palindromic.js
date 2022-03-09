/* exported isPalindromic */

function isPalindromic(string) {
  const string1 = string.replace(' ', '');
  let string2 = '';

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      string2 += string[i];
    }
  }

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}
