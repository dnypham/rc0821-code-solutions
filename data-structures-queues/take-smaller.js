/* exported takeSmaller */

function takeSmaller(queue) {

  if (queue.peek() !== undefined) {
    const first = queue.dequeue();

    if (queue.peek() !== undefined) {
      const second = queue.dequeue();

      if (first > second) {
        queue.enqueue(first);
        return second;
      } else {
        queue.enqueue(second);
        return first;
      }
    } else {
      return first;
    }
  } else {
    return undefined;
  }
}
