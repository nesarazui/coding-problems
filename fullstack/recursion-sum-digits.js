Write a function, sumDigits, that sums all the digits of a given integer (assume positive). Use recursion.

sumDigits(1234) // => 10

// YOUR CODE BELOW
  const sumDigits = (num) => {
  let stringNum = String(num)

//base case
  if (stringNum.length === 1) {
    return Number(stringNum[0])
  }

//recursion
  let lastNum = Number(stringNum[stringNum.length - 1])
  console.log(lastNum)
  return lastNum + sumDigits(stringNum.slice(0, stringNum.length - 1))

  }
