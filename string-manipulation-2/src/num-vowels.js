/* exported numVowels */
function numVowels(string) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'a' || string.charAt(i) === 'A' || string.charAt(i) === 'e' || string.charAt(i) === 'E' || string.charAt(i) === 'o' || string.charAt(i) === 'O' || string.charAt(i) === 'u' || string.charAt(i) === 'U' || string.charAt(i) === 'i' || string.charAt(i) === 'I') {
      count++;
    }
  }
  return count;
}
