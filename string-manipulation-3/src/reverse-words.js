/* exported reverseWords */

function reverseWords(string) {
  let string1 = string;
  const substring = '';

  for (let i = 0; i < string1.length; i++) {
    if (string1.charAt(i) === ' ') {
      console.log(string1.substring(0, string1[i]));
      string1 = string1.slice(0, string1[i]);
    }
  }
}
