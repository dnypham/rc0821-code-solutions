/* exported reverseWords */

function reverseWords(string) {
  const test = string.split(' ');
  console.log(test);
  const test2 = [];

  for (let i = 0; i < test.length; i++) {
    const test1 = test[i].split();
    test1.reverse();
    test1.join();
    test2.push(test1);
  }

  test2.reverse();
  test2.join(' ');
  console.log(test2);
}
