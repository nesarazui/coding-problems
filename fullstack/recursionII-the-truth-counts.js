Write a function, theTruthCounts, that accepts a multi-dimensional array of values. theTruthCounts should return the count of all truthy values inside the multidimesional array.

theTruthCounts([0, [true, ['yes']]]); // => 2

// YOUR CODE BELOW
const theTruthCounts = (array) => {
  let counter = 0

  for (let i = 0; i < array.length; i++) { //loop through entire array
    let currentElement = array[i]
    if (Array.isArray(currentElement)) {
      counter += theTruthCounts(currentElement)
    }
    else { //if its just the main element,  and if its 'truthy' add 1 to counter; if not continue in main loop
      if (currentElement !== 0 && currentElement !== undefined && currentElement !== NaN && currentElement !== null && currentElement !== false && currentElement !== '') {//if truthy
      counter += 1
      console.log(currentElement)
      }
    }
  }
  return counter
}
