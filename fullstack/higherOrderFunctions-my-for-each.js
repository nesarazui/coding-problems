/*
Write a function myForEach that accepts an array and a callback function. The behavior of myForEach should mirror the functionality of the native .forEach() array method as closely as possible

let sum = 0;

function addToSum(num) {
    sum += num;
}

let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum); // 6
*/

// YOUR CODE BELOW
const myForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) { //loops through array
  let element = array[i] // each number is an 'element' (1, 2, 3)
  callback(element, i) //calls function with that element as argument
}
}
