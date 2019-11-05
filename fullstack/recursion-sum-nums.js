Write a function, sumNums, that takes a number greater than 1 and returns the sum of all the numbers between the given number and 1. Use recursion.

sumNums(3); // => 6 (3 + 2 + 1)

// YOUR CODE BELOW
const sumNums = (num) => {
  if (num === 1) {
    return 1
  }
  
 let result = num + sumNums(num - 1)
 return result
}
