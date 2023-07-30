const fibonacci = function (ordinal) {
  if (ordinal < 0) {
    return "OOPS";
  }

  if (typeof ordinal === "string") {
    ordinal = +ordinal;
  }
  let a = 0,
    b = 1,
    c;
  if (ordinal === 0) {
    return a;
  }
  for (let i = 2; i <= ordinal; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
