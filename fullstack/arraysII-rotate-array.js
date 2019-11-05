/*
Define a function, rotateArray, that accepts two arguments:

originalArray (array)
rotateNum (number)
If the rotateNum is positive, rotate should return a copy of the original array rotated to the right by the rotateNum of indices.

rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]
If the rotateNum is negative, rotate should return a copy of the original array rotated to the left by the rotateNum of indices.

rotate([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]
If the rotateNum is 0, rotate should return a copy of the original array without rotating it.

rotate([1, 2, 3, 4, 5], 0) // => [1, 2, 3, 4, 5]
You can assume the absolute value of rotateNum will be less than the length of the original array.
*/

// YOUR CODE BELOW
const rotateArray = (array, rotateNum) => {
  if (rotateNum > 0) {
    let taken = array.splice(array.length - rotateNum, rotateNum) //takes out amount
    let string = taken.join('') //converts it to a string
    array.unshift(string) //adds that to the front of the array
    return array;
  }
  if (rotateNum < 0) {
    let taken = array.splice(0, 0 - rotateNum) //takes out amount (taken is the new subarray)
    let newArray = [...array, ...taken] //spills into newArray everything left from array and taken array
    return newArray;
  }
  else {
    return array;
  }
}
