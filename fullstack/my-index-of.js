/*
My Index Of
Define a function, myIndexOf, that accepts three arguments:

source (string)
searchValue (string)
startIdx (number) - optional
If the source contains the searchValue, return the index at which the searchValue starts. If the searchValue appears more than once in the source, return the index from the first occurance of the searchValue. If the searchValue doesn't exist in the source, return -1.

If a startIdx is passed into the function, ignore any instances of the searchValue that occur before that index. If no startIdx is provided, start searching from the beginning of the source.

Do not use the built-in .indexOf string method in your answer. Feel free to use it in all future workshop problems though!

myIndexOf('hello', 'h'); // => 0
myIndexOf('hello', 'e'); // => 1
myIndexOf('hello', 'l'); // => 2
myIndexOf('hello', 'l'); // => 2
myIndexOf('hello', 'o'); // => 4

myIndexOf('twice twice', 'ice'); => 2

// find the index of the first instance of 'ice' starting at index 5.
myIndexOf('twice twice', 'ice', 5); => 8

myIndexOf('happy string', 'sad'); => -1
*/

// YOUR CODE BELOW
const myIndexOf = (source, searchValue, startIdx = 0) => {
  for (let i = startIdx; i < source.length; i++) {
    let char = source[i];
    let potentialMatch = searchValue[0]
    if (char === potentialMatch) {   
      for (let j = 0; j < searchValue.length; j++) {
        let searchValueChar = searchValue[j]
        let sourceChar = source[i + j]
        if (searchValueChar === sourceChar && j === searchValue.length -1)  {
          return i;
        }
      }
    }
  }
  return -1;
}
