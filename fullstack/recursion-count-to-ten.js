Write a function, countToTen, that receives a number less than or equal to 10. countToTen should console.log every number between the given number and 10, including 10. Use recursion.

NOTE: The test for this function checks how many times you call console.log. If you use console.log for debugging purposes, that's great! But your test will likely fail, so comment out your console.logs when you want to see if you're passing the test

// YOUR CODE BELOW
const countToTen = (num) => {
  if (num === 10) {
    console.log(num)
  }
  if (num < 10) {
    console.log(num)
    countToTen(num + 1)
  }
}
