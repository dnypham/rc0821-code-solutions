/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var capitalizedArray = [];

  for (var i = 0; i < words.length; i++) {
    var char1 = words[i][0].toUpperCase();
    var char2 = words[i].slice(1).toLowerCase();
    var word = char1 + char2;

    capitalizedArray.push(word);
  }
  return capitalizedArray.join(' ');
}
