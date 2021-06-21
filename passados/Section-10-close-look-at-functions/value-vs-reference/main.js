'use strict';

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 32438734987,
};

const checkIn = function (flightNum, passenger) {
    //ao sob escrever um parametro cujo valor original seja do tipo primitivo, o mesmo não será alterado
    flightNum = 'LH999';
    //ao sob escrever o parâmetro cujo o valor original for um objeto, o mesmo será alterado,
    //é como se estivesse alterando o valor original
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 32438734987) {
        // alert('check in')
    } else {
        // alert('wrong passport')
    }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//------------------------------------------

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000)
}

newPassport(jonas);
checkIn(flight, jonas);


