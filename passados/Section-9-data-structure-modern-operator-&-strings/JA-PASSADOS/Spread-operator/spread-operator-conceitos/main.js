"use strict";
//spread operator é usado geralmente da desestruturação, argumentos de funções e na criação de variaveis;

const arr = [4, 5, 6]
const newArr = [1, 2, 3, ...arr]

console.log(...newArr)
console.log(newArr)
//-------------------------------

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
//não mudou o nome do objeto original
console.log(restaurantCopy.name)
console.log(restaurant.name)

//---------------------------------------------
/*pegando todas as propriedades do menu, adicionando 'peixe frito'
e esse objeto vai estar no new menu*/
const newMenu = [...restaurant['mainMenu'], 'Peixe Frito']
console.log(newMenu)
