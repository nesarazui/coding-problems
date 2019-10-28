/*
Write a function callThemAll, that, given an object and a value, calls every method in the object, passing in the value as the argument with each call.

callThemAll should return an array with all of the returned values from each method invocation. The order of the elements in the returned array does not matter.

let addsNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};

callThemAll(addNums, 100); // => [110, 120]
*/

// YOUR CODE BELOW
const callThemAll = (object, value) => {
  let array = []
  for (let key in object) {
    // console.log(typeof object[key]) LOGS FUNCTION, FUNCTION, STRING
    if (typeof object[key] === 'function') {
      // console.log(object[key])
      let answer = object[key](value)
      array.push(answer)
    }
  }
  return array
}

