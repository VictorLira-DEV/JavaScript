'use strict';

//---SLICE---
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(alphabet.slice(2, 4));
console.log(alphabet.slice(1, -2));
console.log(alphabet.slice(-2));
console.log(alphabet.slice(-1));
console.log(alphabet.slice()); //this copy the entire array

//---SPLIcE---
//this works like slice method but
//this method changes the original array

console.log(alphabet.splice(2));
console.log(alphabet);

//-----REVERSE---
//muda o array original
const reverse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverse.reverse());


//---CONCAT---
//concatena os valores
console.log(alphabet.concat(reverse));

//--JOIN---
//basicamente esse método irá desestruturar um array em string,
//onde é possível determinar o argumento que ficará entre eles
const fruits = ['banana', 'maça', 'apple', 'mango']

const energy = fruits.join('\n');
console.log(energy)


//--PUSH--
const numbers = []
for (let index = 0; index <= 10; index++) {
    numbers.push(index)
}
console.log(numbers);

//--POP--
//remove o ultimo elemento do array
//altera o array original
console.log(numbers.pop());
console.log(numbers);

//--shift-- 
//remove the fisrt element of the array
//altera o array original
console.log(numbers.shift());
console.log(numbers)

//unshift
//adiciona novos itens no inicio do array
fruits.unshift('lemon', 'pineapple');
console.log(fruits);

//SORT
//coloca em orderm, seja alfabetica seja numérica
console.log(fruits.sort());


//entries
//retorna o index e o valor de um array
for (const [index, value] of fruits.entries()){
    console.log(index + "=" + value)
}