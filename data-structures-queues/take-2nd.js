/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();

    if (queue.peek() !== undefined) {
      queue.enqueue(first);
      return queue.dequeue();
    } else {
      return first;
    }
  } else {
    return undefined;
  }
}
