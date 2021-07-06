//podemos criar um array, ou alterar alguma coisa em um array

//Convertendo um nodelist em um array
//nesse caso o primeiro argumento é o array
//o segundo argumento será o valor atribuido para cada posição do array
//a lógica parece com a do método map

const dataConverted = Array.from(
  document.querySelectorAll(".movements__value"),
  (element, index) => Number(element.textContent.replace("EUA", ""))
);
// console.log(dataConverted);

//--------------------------------------------------------

//Criando um array do zero
const y = Array.from({ length }, () => 1);
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

//------------------------------------------------------

const nome = "Victor";
const numbers = "2345567";

let filtered = Array.from(numbers);

// console.log(filtered);

//----------------------------------------------------
//Convertendo para Strings
const arrayNum = [23, 45, 687, 9, 0, 346, 78];
const arrayConvertedToString = Array.from(arrayNum, (item) => String(item));
console.log(arrayConvertedToString)

//alterando um array existente
const pessoas = ['Pedro', 'Victor', 'Jessica', 'Jeniffer'];

//ADICIONANDO MAIS PALAVRAS AO ARRAY

const pessoasFiltradas = Array.from(pessoas, (item, index) => `nome: ${item} Index: ${index}`);
console.log(pessoasFiltradas)