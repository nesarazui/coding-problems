Write a function, callCount, that returns a new function. The new function should return the number of times its been called.

let newFunction1 = callCount();
let newFunction2 = callCount();

newFunction1(); // => 1
newFunction1(); // => 2

newFunction2(); // => 1
newFunction2(); // => 2

// YOUR CODE BELOW
const callCount = () => {

let total = 0
  const func = () => {
     total += 1
     return total
  }

return func
}
