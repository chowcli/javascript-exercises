function removeNonAlphanumeric(string) {
  const alphanumeric = "qwertyuiopasdfghjklzxcvbnm1234567890";
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (alphanumeric.includes(string[i])) result += string[i];
  }
  return result;
}

const palindromes = function (string) {
  const reverseString = removeNonAlphanumeric(string.toLowerCase());
  return reverseString.split("").reverse().join("") === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
