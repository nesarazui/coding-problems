/*
Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

mySplice only needs to take one element to add to the array (the .splice method can actually take any number of values to add).

Do not use .splice in your function.

let myArray = [1, 2, 3];

mySplice(myArray, 1, 1, 'apples')) // => [2]

console.log(myArray)    // [1,'apples', 3]
*/

// YOUR CODE BELOW
const mySplice = (array, startIndex, numRemove, newValue) => {
  let removed = []
  let kept = []
  for (let i = 0; i < start; i++) {
    kept.push(array[i])
  }

  if (newValue !== undefined) {
    kept.push(newValue)
  }

  for (let i = start; i < start + count; i++) {
    removed.push(array[i])
  }

  for (let k = start + count; k < array.length; k++) {
    kept.push(array[k])
  }

  //update original array with what's in kept
  while(array.length) {
    array.pop()
  }

  for (let m = 0; m < kept.length; m++) {
    array.push(kept[m])
  }

  return removed
}
