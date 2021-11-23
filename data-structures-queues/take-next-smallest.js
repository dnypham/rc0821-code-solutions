/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() !== undefined) {
    let first = queue.dequeue();
    let second = queue.peek();

    if (!second) {
      return first;
    }

    while (first > second) {
      queue.enqueue(first);
      first = queue.dequeue();
      second = queue.peek();
    }

    return first;
  } else {
    return undefined;
  }
}
