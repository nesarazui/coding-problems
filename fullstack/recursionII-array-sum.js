Write a function, arraySum, that accepts an array of numbers and returns the sum of all the numbers in the array (no matter how nested!).

arraySum([1, [2, 3, [4]]]) // => 10

// YOUR CODE BELOW
const arraySum = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    if (Array.isArray(element)) { //if element is array, go deeper (call function)
      sum += arraySum(element)
    }
    else { // if element is not an arry (the base case where we eventually get to the number)
      sum += element
    }
  }
  return sum
}
