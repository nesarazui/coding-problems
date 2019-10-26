/*
Only One
Write a function onlyOne that accepts three arguments of any type.

onlyOne should return true only if exactly one of the three arguments are truthy. Otherwise, it should return false.

Do not use the equality operators (== and ===) in your solution.

onlyOne(false, false, true); // => true
onlyOne(0, 1, 2) // => false
*/

// YOUR CODE BELOW
const onlyOne = (one, two, three) => {
  if ((one && !two && !three) || (!one && two && !three) ||
  (!one && !two && three)) {
    return true
  }
  else {
    return false
  }
}
