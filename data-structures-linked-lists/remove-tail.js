/* exported removeTail */

function removeTail(list) {
  if (list.next) {
    while (list.next.next) {
      list = list.next;
    }
    list.next = null;
  }
}
