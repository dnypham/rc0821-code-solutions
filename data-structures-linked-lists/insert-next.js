/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newValue = new LinkedList(value);
  const otherValues = list.next;
  list.next = newValue;
  list.next.next = otherValues;
}
