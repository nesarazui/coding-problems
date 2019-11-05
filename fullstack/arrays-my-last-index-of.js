/*
Define a function, myLastIndexOf, that accepts up to three arguments:

array
searchValue
startIdx (optional)
myLastIndexOf should return the last index at which the searchValue appears in the array.

myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
If the searchValue isn't in the array, myLastIndexOf should return -1.

myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
If startIdx is defined, myLastIndexOf should start looking for the seachValue at that index, and then move toward the front of the array as it looks for the value.

myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
You cannot use the built-in .lastIndexOf method for this problem, but feel free to use it in the future! Note that strings also have a .lastIndexOf method.
*/

// YOUR CODE BELOW
const myLastIndexOf = (array, searchValue, startIdx = array.length - 1) => {
  for (let i = startIdx; i >= 0; i--) {
    if (array[i] === searchValue) {
      return i;
    }
  }
  return -1;
}
