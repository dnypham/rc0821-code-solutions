/* exported zip */

function zip(first, second) {
  const newArray = [];

  if (first.length < second.length) {
    for (let i = 0; i < first.length; i++) {
      const subArray = [];
      subArray.push(first[i]);
      subArray.push(second[i]);
      newArray.push(subArray);
    }
    return newArray;
  } else {
    for (let i = 0; i < second.length; i++) {
      const subArray = [];
      subArray.push(first[i]);
      subArray.push(second[i]);
      newArray.push(subArray);
    }
    return newArray;
  }
}
