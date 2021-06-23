'use strict'
//MERGING TWO ARRAYS

//Copy array
const newMenuCopy = [...restaurant.mainMenu];

//join 2 arrays

const menu = [...restaurant['mainMenu'], ...restaurant['startMenu']]
console.log(menu)

//Iterables: array, string, set, maps. not objects
const srt = 'Jonas';
const letters = [...srt, '', 's'];
console.log(letters);