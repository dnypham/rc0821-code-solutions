/* exported getLength */

function getLength(list) {
  let number = 0;

  if (list) {
    number++;
  }

  while (list.next) {
    number++;
    list = list.next;
  }

  return number;
}
