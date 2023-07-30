const removeFromArray = function (array, ...values) {
  let newArray = array.filter((element) => !values.includes(element));
  return newArray;
};

//
// const removeFromArray = function (array, ...values) {
//   const newArray = [];
//   array.forEach((item) => {
//     if (!values.includes(item)) newArray.push(item);
//   });
//   return newArray;
// };

//
console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
console.log(removeFromArray([1, 2, 3, 4], 7, 2));
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
