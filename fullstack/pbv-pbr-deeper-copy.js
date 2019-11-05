Write a function, deeperCopy, that, unlike .slice, will deeply copy a two- dimensional array.

let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray); // [1, [2, 3]]

let copy2 = myArray.slice();
copy2[1].push(4);

console.log(myArray); // [1, [2, 3, 4]]

// YOUR CODE BELOW
const deeperCopy = (array) => {
  let arrCopy = []

  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    if (!Array.isArray(num)) {
      arrCopy.push(num)
    }
    else { //if it IS an array
      let arrayVal = []
      for (let j = 0; j < num.length; j++) {
        arrayVal.push(num[j])
      }
      arrCopy.push(arrayVal)
      
    }

  }

  return arrCopy
}
