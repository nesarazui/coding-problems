/*
Define a function, dogBreeder, that accepts up to two optional arguments:

name (string)
age (number)
dogBreeder should return an object that represents a new dog! If the user doesn't define a name, assume the dog's name is Steve. If the user doesn't define the dog's age, assume the dog's age is 0.

dogBreeder('Sam', 12)    // => {name: 'Sam', age: 12}

dogBreeder(15)    // => {name:'Steve', age: 15}
*/

// YOUR CODE BELOW
const dogBreeder = (string = 'Steve', number = 0) => {
  let object = {name: 'Steve', age: 0}
  
  //build object using name and age (both optional)
  if (typeof string === 'string') {
    object.name = string
  }
  if (typeof number === 'number'){
    object.age = number
  }
  if (typeof string === 'number') {
    object.age = string
  }

  return object
}
