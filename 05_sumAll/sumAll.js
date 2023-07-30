const sumAll = function (num1, num2) {
  let sum = 0;
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
