/*
Zero Dark Thirty
Write a function zeroDarkThirty that accepts a number as an arguemnt.

zeroDarkThirty should return a number with all of the zeroes removed:

zeroDarkThirty(102302) // => 1232
zeroDarkThirty(606.203) // => 66.23
If the number 0 is passed in as the argument, return NaN.

zeroDarkThirty(0) // => NaN
*/

// YOUR CODE BELOW
const zeroDarkThirty = (number) => {
  let stringNum = String(number);
  let newString = '';
  console.log('this is the string: ' + stringNum)
  console.log('length of string is: ' + stringNum.length)
  if (number === 0) {
    return NaN;
  }
  else {
  for (let i = 0; i < stringNum.length; i++) {
    console.log('i: ' + stringNum[i])
     if (stringNum[i] !== '0') {
       newString = newString + stringNum[i];
       }
  }
  let numString = Number(newString);
  return numString;
    }
}
