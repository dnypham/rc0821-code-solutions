/* exported ransomCase */
function ransomCase(string) {
  var string1 = '';

  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      string1 += string.charAt(i).toLowerCase();
    } else if (i % 2 !== 0) {
      string1 += string.charAt(i).toUpperCase();
    }
  }
  return string1;
}
