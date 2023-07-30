const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((sum, element) => sum + element, 0);
};

const multiply = function (...numbers) {
  let total = 1;
  for (let num of numbers) {
    total *= num;
  }
  return total;
};

const power = function (base, exponent) {
  let total = base;
  for (let i = 2; i <= exponent; i++) {
    total *= base;
  }
  return total;
};

const factorial = function (num) {
  let factorial = 1;
  for (let i = num; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
