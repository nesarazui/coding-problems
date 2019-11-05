/*
Define a function, myIncludes, that accepts an array and a searchValue.

myIncludes should return true if the searchValue is an element in the array. Otherwise, myIncludes should return false.

Do not use the built-in .includes array method during this problem. Feel free to use it on any future problem though! Note that strings have an .includes method, too.

myIncludes([10, 20, 30], 20); // => true
myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false
*/

// YOUR CODE BELOW
const myIncludes = (array, searchValue) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchValue) {
      return true;
    }
  }
  return false;
}
