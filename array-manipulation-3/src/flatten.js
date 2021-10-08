/* exported flatten */

function flatten(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const test = array.shift();
    console.log(test);

    if (Array.isArray(test)) {
      console.log(array[i]);
    } else {
      newArray.push(test);
    }
  }

  console.log(newArray);
}
