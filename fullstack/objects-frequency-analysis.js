/*
Define a function frequencyAnalysis that accepts a string of lower-case letters.

frequencyAnalysis should return an object containing the count for each letter in the string.

frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
*/

// YOUR CODE BELOW
const frequencyAnalysis = (string) => {
  let freqObj = {}
  for (let i = 0; i < string.length; i++) {
     letter = string[i]
     if (letter in freqObj) {
       freqObj[letter]++
     }
     else {
       freqObj[letter] = 1
     }
  }
  return freqObj;
}
