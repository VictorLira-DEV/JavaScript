'use strict'
//MERGING TWO ARRAYS

const class1 = [1,2,3];
const class2 = [4,5,6];

const allClasses = [...class1, ...class2].join();
console.log(allClasses)

//Copy array

//Iterables: array, string, set, maps. not objects
const srt = 'Jonas';
const letters = [...srt, '', 's'];
console.log(letters.join());