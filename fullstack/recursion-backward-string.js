Write a function, backwardString, that receives a string. It should log every letter in the string, from the last character to the first. Use recursion.

NOTE: As with the last problem, the tests will check how many times console.log is called

// YOUR CODE BELOW
const backwardString = (str) => {
  if (str.length === 1) {
    console.log(str)
    return str
  }

    console.log(str[str.length - 1])
    backwardString(str.slice(0, str.length - 1))

}
