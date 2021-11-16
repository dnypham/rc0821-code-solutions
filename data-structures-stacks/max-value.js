/* exported maxValue */

function maxValue(stack) {
  let highestNumber = -Infinity;

  while (stack.peek() !== undefined) {
    if (stack.peek() > highestNumber) {
      highestNumber = stack.peek();
      stack.pop();
    } else {
      stack.pop();
    }
  }

  return highestNumber;
}
