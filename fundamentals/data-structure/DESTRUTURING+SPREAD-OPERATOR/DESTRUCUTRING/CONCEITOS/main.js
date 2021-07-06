//podemos  selecionar valores no array, sem precisar criar  variaveis soltas

const alphabet = ["a", 3, "c", "d", "e", "f"];
const numbers = ["1", "2", "3", "4", "5", "6"];
const [a, b, c] = alphabet;
//const [a,, c] = alphabet <- use 'comma' to skip elements

//this in going to be useful when it comes to object

console.log(a);
console.log(b);
console.log(c);
