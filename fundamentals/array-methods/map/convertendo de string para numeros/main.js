//convertendo de strings para números

// const str = ["1", "2", "3", "4"];
// const numbers = str.map(Number);
//const numbers = str.map(item => Number(item))
// console.log(numbers);

//map cria um novo array e retorna um novo resultado.

//arrow function
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let numbersConverted = numbers.map(Number);

// let total = numbersConverted.map((item, index, arr) => {
//   return item * 2;
// });

// console.log(total);

//função normal
function multiply(item, index, arr) {
  return Number(item * 5);
}

const multiplicacao = numbersConverted.map(multiply);
console.log(multiplicacao);
