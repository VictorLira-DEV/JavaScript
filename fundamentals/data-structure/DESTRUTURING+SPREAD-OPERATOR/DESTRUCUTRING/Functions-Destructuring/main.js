// normal function

// function someAndMultiply(a, b) {
//   return [a + b, a * b];
// }

// const array = someAndMultiply(5, 7);

// console.log(array);

// function with destructuring

function someAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, multiply, division = "no Division"] = someAndMultiply(5, 7);

console.log(sum);
console.log(multiply);
console.log(division);
