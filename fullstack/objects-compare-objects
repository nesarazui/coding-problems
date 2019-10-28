/*
Define a function, compareObjects, that accepts two objects as arguments.

compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, compareObjects should return false. Assume the objects are not nested.

compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
*/

// YOUR CODE BELOW
const compareObjects = (obj1, obj2) => {
 if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
 for (let key1 in obj1) {
   if (obj1[key1] !== obj2[key1]) {
     return false
   }
 }
 return true
}
