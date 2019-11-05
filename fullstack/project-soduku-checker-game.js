// TEST PUZZLES
let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

// GetROW FUNCTION: returns a row from puzzle based on row index
const getRow = (puzzle, rowIndex) => {
  return puzzle[rowIndex]
}

// getCOLUMN FUNCTION: returns a column from puzzle based on column index
const getColumn = (puzzle, columnIndex) => {
  let column = [];
  for (let i = 0; i < puzzle.length; i++) {
    let currentRow = puzzle[i]
    column.push(currentRow[columnIndex])
  }
  return column;
}

// getGRID FUNCTION: returns 3x3 subgrid from puzzle based on x pos (0 or 1 or 2) and y pos (0 or 1 or 2) of upper left of subgrid
const getGrid = (puzzle, x, y) => {
  let subGrid = [];
  for (let i = y * 3; i < (y * 3) + 3; i++) {
    for (let j = x * 3; j < (x * 3) + 3; j++) {
      subGrid.push(puzzle[i][j]);
    }
  }
  return subGrid;
}

// includes1to9 FUNCTION: accepts a subsection and checks that it includes the numbers 1-9 (with no repeats). 
const includes1to9 = (subsection) => {
  if (subsection.includes(1) && subsection.includes(2) && subsection.includes(3) && subsection.includes(4) && subsection.includes(5) && subsection.includes(6) && subsection.includes(7) && subsection.includes(8) && subsection.includes(9)) {
    return true;
  }
  else {
    return false;
  }
}

// FINAL FUNCTION TO CHECK IF FULL PUZZLE IS CORRECT:
const sudokuIsValid = (puzzle) => {
// 1) are all rows valid?
// 1a) will need to check that each row in puzzle is valid
  const rowsAreValid = () => { //returns false if ANY row is not valid
    for (let i = 0; i < 9; i++) {
      let checkRow = getRow(puzzle, i) //spits out row array for includes1to9 to use
      if (includes1to9(checkRow) === false) {
        return false //exits out of rowsAreValid as false, without checking remaining loop
      }
    }
    return true
  }
  let allRows = rowsAreValid(); // captures true or false
// 2) are all columns valid?
// 2a) will need to check that each column in puzzle is valid
  const columnsAreValid = () => { //returns false if ANY column is not valid
    for (let i = 0; i < 9; i++) {
      let checkColumn = getColumn(puzzle, i) //spits out column array for includes1to9 to use
      if (includes1to9(checkColumn) === false) {
        return false //exits out of columnsAreValid as false, without checking remaining loop
      }
    }
    return true;
  }
  let allColumns = columnsAreValid() // captures true or false
// 3) are all subgrids valid?
// 3a) will need to check that each subgrid in puzzle is valid.
  const subGridsAreValid = () => { //returns false if ANY subgrid is not valid
    for (let a = 0; a < 3; a++) {
      for (let b = 0; b < 3; b++) { //outer and inner loops will provide all possible x and y coords as arguments for getGrid function
        let checkGrid = getGrid(puzzle, a, b)
        if (includes1to9(checkGrid) === false) {
          return false //exits out of subGridsAreValid as false, without checking remaining loops
        }
      }
    }
    return true
  }
  let allSubGrids = subGridsAreValid();//if subGridsAreValid returns true, 1 out of 3 checks is set
 // 4) if all 3 conditions are true; sodukoIsValid returns true
  if (allRows === true && allColumns === true && allSubGrids === true) {
    return true;
  }  
  else {
    return false;
  }
}

console.log(sudokuIsValid(puzzle))
console.log(sudokuIsValid(p8zzle))

// BONUS: isSame determines if 2 puzzles are identical (true)

// TEST PUZZLES (REMOVE AS A COMMENT TO TEST BONUS)
// let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
//               [ 2,7,1,9,6,3,4,8,5 ],
//               [ 4,6,3,5,8,1,7,9,2 ],
//               [ 9,3,4,6,1,7,2,5,8 ],
//               [ 5,1,7,2,3,8,9,6,4 ],
//               [ 6,8,2,4,5,9,3,7,1 ],
//               [ 1,5,9,8,7,4,6,2,3 ],
//               [ 7,4,6,3,2,5,8,1,9 ],
//               [ 3,2,8,1,9,6,5,4,7 ]];

// let puzzleCopy = [[ 8,9,5,7,4,2,1,3,6 ],
//                   [ 2,7,1,9,6,3,4,8,5 ],
//                   [ 4,6,3,5,8,1,7,9,2 ],
//                   [ 9,3,4,6,1,7,2,5,8 ],
//                   [ 5,1,7,2,3,8,9,6,4 ],
//                   [ 6,8,2,4,5,9,3,7,1 ],
//                   [ 1,5,9,8,7,4,6,2,3 ],
//                   [ 7,4,6,3,2,5,8,1,9 ],
//                   [ 3,2,8,1,9,6,5,4,7 ]];

// let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
//               [ 8,7,1,9,6,3,4,8,5 ],
//               [ 4,6,3,5,8,1,7,9,2 ],
//               [ 9,3,4,6,1,7,2,5,8 ],
//               [ 5,1,7,2,3,8,9,6,4 ],
//               [ 6,8,2,4,5,9,3,7,1 ],
//               [ 1,5,9,8,7,4,6,2,3 ],
//               [ 7,4,6,3,2,5,8,1,9 ],
//               [ 3,2,8,1,9,6,5,4,7 ]];


const isSame = (puzzleA, puzzleB) => {
  for (let i = 0; i < 9; i++) {
    let currentRowA = getRow(puzzleA, i) 
    let currentRowB = getRow(puzzleB, i)
    for (let j = 0; j < 9; j++) {
      if (currentRowA[j] !== currentRowB[j]) {
        return false
      }
    } 
  }
  return true
}

console.log(isSame(puzzle, p8zzle))
// => false

console.log(isSame(puzzle, puzzleCopy));
// => true
