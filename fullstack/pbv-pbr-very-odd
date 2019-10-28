/*
Write a function, veryOdd. The function accepts an array of numbers. It should return a new array that contains only the odd numbers from the given array. veryOdd must not mutate the given array.

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]
*/

// YOUR CODE BELOW
const veryOdd = (array) => {
  let newArray = array.slice() //first make a copy of 'array' so orig doesn't mutate
  for (let i = 0; i < newArray.length; i++) { //loop thru newArray and delete any even numbers 
    let num = newArray[i] //assign the i'th number to 'num'
    if (num % 2 === 0) { //if num is even
      newArray.splice(i, 1) //delete from array the number at index i (and only that one)
    }
  } //by end of loop, all even nums will be removed from newArray
  return newArray
}
