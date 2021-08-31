/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var index1 = string.charAt(firstIndex);
  var index2 = string.charAt(secondIndex);
  var string1 = '';
  var string2 = '';

  string1 = string.replace(index1, index2);
  string2 = string1.replace(index2, index1);
  return string2;
}
