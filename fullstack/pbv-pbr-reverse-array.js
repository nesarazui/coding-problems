/*
Write a function that accepts an array and reverses that array in place. The behavior should mimic the behavior of the native .reverse() array method. However, your reverse function should accept the array to operate on as an argument, rather than being invoked as a method on that array.

Do not use the native .reverse() method in your own implementation.

let myArray = [1, 2, 3, 4];
reverse(myArray);
console.log(myArray) // [4, 3, 2, 1]
*/

// YOUR CODE BELOW
const reverseArray = (arr) => {
  const middle = Math.ceil(arr.length / 2)
  
  for (let i = 0; i < middle; i++) {
    const end = (arr.length - 1) - i
    const left = arr[i]
    const right = arr[end]
   arr[i] = right
   arr[end] = left
  }
  return arr
}
