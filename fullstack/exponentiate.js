/*
Exponentiate
Write a function exponentiate that accepts two arguments:

base (number)
power (number)
exponentiate should return the result of raising the base by the power. Assume the power argument will always be an integer greater than or equal to zero. Don't forget that any number raised to the 0th power is equal to 1!

Do not use the built-in Math.pow() method, but feel free to use it moving forward!
exponentiate(2, 2)    // => 4
exponentiate(3, 4)    // => 81
*/

const exponentiate = (base, power) => {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * base;
  }
  return result;
};
