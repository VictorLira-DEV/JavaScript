'use strict';

const Person = function (firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.BirthYear = birthYear;

    //Never create a method inside cunstructor function
    //because is bad for our app performance
    //use prototype inheritence instead

    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear)
    // }
}

// what happen when we use "new";
// {} empty obj is created;
// function is called, "this" is the new empty obj
// {} is linked to prototype
// function altomatically return that empty {}

const jonas = new Person('Jonas', 1991);
const pedro = new Person('Pedro', 1997);
const victor = new Person('Victor', 1999);
