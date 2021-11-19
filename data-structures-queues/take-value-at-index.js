/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = 0;

  while (queue.peek() !== undefined) {
    const value = queue.dequeue();

    if (value === undefined) {
      return undefined;
    }

    if (count === index) {
      return value;
    } else {
      queue.enqueue(value);
    }

    count++;
  }
}
