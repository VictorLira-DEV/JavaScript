'use strict';

const Person = function (firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.BirthYear = birthYear;
}

// what happen when we use "new";
// {} empty obj is created;
// function is called, "this" is the new empty obj
// {} is linked to prototype
// function altomatically return that empty {}

const jonas = new Person('Jonas', 1991);
const pedro = new Person('Pedro', 1997);
const victor = new Person('Victor', 1999);


//prototype
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
victor.calcAge();
console.log(jonas)

// solving this confunsiong
// think of "prototype" as "prototypeOfLinkedObjects"

console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(pedro));
console.log(Person.prototype.isPrototypeOf(victor));
console.log(Person.prototype.isPrototypeOf(Person));

//adding properties to prototype;
/*abaixo podemos ver que a propriedade "species" não esta diretamente ligada ao obj "victor e jonas" 
mas mas podemos acessar por causa de herânça */
Person.prototype.species = 'Home Sapiens';
console.log(jonas, victor);

//------------------ || -------------------
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));