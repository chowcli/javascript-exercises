const repeatString = function (string, num) {
  let repeatString = "";
  if (num < 0) return "ERROR";

  for (let i = 0; i < num; i++) {
    repeatString += string;
  }
  return repeatString;
};
console.log(repeatString("hey", 3));
console.log(repeatString("hey", 10));
console.log(repeatString("hey", 1));
console.log(repeatString("hey", 0));
console.log(repeatString("hey", -1));
console.log(repeatString("", 10));

// Do not edit below this line
module.exports = repeatString;
