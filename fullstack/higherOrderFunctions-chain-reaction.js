/*
Define a function, 'chainReaction', that takes a starting value and an array of functions.

'chainReaction' should pass the starting value into the first function in the array. It should pass the value returned by the first function into the second function, and so on until every function in the array was called.

'chainReaction' should return the final value returned by the final function in the array.

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

chainReaction(0, [addTen, subtractFive, multiplyFive]); // => 25
chainReaction(0, [subtractFive, multiplyFive, addTen]); // => -15
*/

// YOUR CODE BELOW
const chainReaction = (startVal, array) => {
  let answer = 0 //i = 0 -> ans = 15; i = 1 -> ans = 10; i = 2 -> ans = 50
  for (let i = 0; i < array.length; i++) { //loops through array 
    let element = array[i] // element is each function in array
    console.log('all elements', element)
    if (i === 0) { //if 1st element, pass in startVal as arg for function
      answer = element(startVal) 
      console.log(answer)
    }
    else { 
      answer = element(answer)
      console.log(answer)
    }
  }
  return answer
}

