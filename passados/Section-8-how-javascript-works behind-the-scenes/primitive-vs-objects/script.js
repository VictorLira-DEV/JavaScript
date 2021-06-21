'use strict'

/* Primitive */
//Number
//String
//Boolean
//Undefined
//Null
//Symbol
//BigIn

/* Objects */
//Object literal
//Arrays
//Functions 

/*the each primitive types is stored in it's own piece of memory in call stack*/ 
let lastName = 'Willians';
let oldLastName = lastName;
lastName = 'Davis' 
console.log(lastName, oldLastName)


/*ao copiar um objeto em outra varivel, vc não estara criando outro objeto, os dois possuem o mesmo endereço de memória, então quanquel alteração será se propagara para ambos*/

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica
marriedJessica.lastName = 'Steve'
console.log('before married', jessica)
console.log('After married', marriedJessica)

/*Como copiar objetos*/

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['alice', 'bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis'

console.log('before married', jessica2)
console.log('After married', jessicaCopy)

jessicaCopy.family.push('Marry');
jessicaCopy.family.push('John');