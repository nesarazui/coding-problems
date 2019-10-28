/*
Define a function, arrayFlattener, that accepts a two-dimensional array as an argument.

arrayFlattener should return a new, one-dimensional array.

arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
*/

// YOUR CODE BELOW
const arrayFlattener = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j])
      }
    }
    else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
