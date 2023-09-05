/**
Assignment:

Create a module in Node.js that exports the following functions:

    add: a function that takes two numbers as arguments and returns their sum.
    subtract: a function that takes two numbers as arguments and returns their difference.
    multiply: a function that takes two numbers as arguments and returns their product.
    divide: a function that takes two numbers as arguments and returns their quotient.
    power: a function that takes two numbers as arguments, where the first number is the base and the second number is the exponent, and returns the result of raising the base to the power of the exponent.

Example solution:
math.js
**/

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid arguments: both parameters must be numbers');
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid arguments: both parameters must be numbers');
  }
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid arguments: both parameters must be numbers');
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid arguments: both parameters must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function power(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new Error('Invalid arguments: both parameters must be numbers');
  }
  return Math.pow(base, exponent);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
};
