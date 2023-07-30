const reverseString = function (string) {
  return string.split("").reverse().join("");
};
console.log(reverseString("hello"));
console.log(reverseString("hello there"));
console.log(reverseString("123! abc!"));
console.log(reverseString(""));

// Do not edit below this line
module.exports = reverseString;
