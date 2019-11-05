Write a function that accepts an array and reverses that array in place. The behavior should mimic the behavior of the native .reverse() array method. However, your reverse function should accept the array to operate on as an argument, rather than being invoked as a method on that array.

Do not use the native .reverse() method in your own implementation.

let myArray = [1, 2, 3, 4];
reverse(myArray);
console.log(myArray) // [4, 3, 2, 1]

// YOUR CODE BELOW
const reverseArray = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let endIndex = (array.length - 1) - i // when i=0; endIndex = 4

    let rightPos = array[endIndex] // when i =0; rightPos = '5'
    let leftPos = array[i] // when i=0; leftPos = '1'

    array[i] = rightPos //when i=0; array[i] will now be 5
    array[endIndex] = leftPos // when i=0; rightPos will now be 1
  }
  return array
}
