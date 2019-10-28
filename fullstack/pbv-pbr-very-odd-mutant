/*
' Write a function, 'veryOddMutant'. The function accepts an array of numbers. The function should mutate the given array by replacing every even number in the array with the string 'normie'.

'veryOddMutant' should return a count of the number of even numbers it replaced.

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);

console.log('allTheNums:', allTheNums);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log('countRemoved:', countRemoved);
// 4
*/

// YOUR CODE BELOW

const veryOddMutant = (array) => {
  let count = 0; //start count at 0
  for (let i = 0; i < array.length; i++) {
    let num = array[i] //defines current number in array
    if (num % 2 === 0) { //if num is even
      array.splice(i, 1, 'normie') //replace i'th element (even num) with 'normie'
      count += 1 //adds 1 to count each time an even num has been replaced with 'normie'
    }
  } //once done with iterating through full loop,
  return count;
}
