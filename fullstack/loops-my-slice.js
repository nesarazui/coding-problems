/*
My Slice
Define a function, mySlice, that accepts up to three arguments:

originalArray
startIdx (number, optional)
endIdx (number, optional)
mySlice should return a copy of the original array. The copy should include all of the elements from the orignal array, starting at and including the startIdx, up through and excluding the endIdx.

mySlice([1, 2, 3], 1, 2) // => [2]
If the endIdx is undefined, include all the indices starting at and including the startIdx through the end of the original array.

mySlice([1, 2, 3], 1) // => [2, 3]
If the startIdx is undefined, return a copy of the original array.

mySlice([1, 2, 3]) // => [1, 2, 3]
startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array.

mySlice([1, 2, 3], -1) // => [3]
Do not use the built-in .slice array method in your answer. Feel free to use it in all future problems though!
*/

// YOUR CODE BELOW
const myIndexOf = (source, searchValue, startIdx = 0) => {
  for (let i = startIdx; i < source.length; i++) {
    let char = source[i];
    let potentialMatch = searchValue[0]
    if (char === potentialMatch) {   
      for (let j = 0; j < searchValue.length; j++) {
        let searchValueChar = searchValue[j]
        let sourceChar = source[i + j]
        if (searchValueChar === sourceChar && j === searchValue.length -1)  {
          return i;
        }
      }
    }
  }
  return -1;
}
