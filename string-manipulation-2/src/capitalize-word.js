/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toUpperCase() !== 'JAVASCRIPT') {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  } else {
    return 'JavaScript';
  }
}
