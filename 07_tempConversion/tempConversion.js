const convertToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));

const convertToFahrenheit = function (celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.2));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
