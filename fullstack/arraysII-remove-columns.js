/*
Write a function removeColumns that accepts two arguments

originalGrid (two-dimensional array)
numColums (number)
removeColumns should return a new grid with the correct number of columns removed.

removeColumns([[1, 2, 3],
               [1, 2, 3],
               [1, 2, 3],
               [1, 2, 3]], 2);
/* => [[1],
       [1],
       [1],
       [1]]
*/
*/

// YOUR CODE BELOW
const removeColumns = (origGrid, numCol) => {
  let newGrid = [];
  for (let i = 0; i < origGrid.length; i++) {
    let currentRow = origGrid[i];
    currentRow.splice(currentRow.length - numCol, numCol)
    newGrid.push(currentRow);
  }
  return newGrid;
}
