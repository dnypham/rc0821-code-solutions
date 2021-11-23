/* exported getTail */

function getTail(list) {
  if (!list) {
    return list;
  }

  while (list.next) {
    list = list.next;
  }

  return list.data;
}
