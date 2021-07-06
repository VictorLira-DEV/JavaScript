'use strict';

const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    },
};

lufthansa.book(239, 'Victor dos santos lira');
lufthansa.book(240, 'Marcelo de oliveira pinto');

console.log(lufthansa)

//---------------------------------------

const eurowings = {
    airline: 'Euwings 36',
    iataCode: 'EW',
    bookings: [],
};

//THE CALL METHOD

const book = lufthansa.book;
/*usando o método "CALL"*/
/*para usar o método fora do objecto , devemos apontar em qual o objeto queremos usar o método*/
/*mesmo que o código da função esteja dentro de "LUFTANSA", podemos fazer com que o this keyword
aponte para outro objeto, usando o método "CALL" */
book.call(eurowings/*eurowings vai ser o aquivalente ao "THIS keyword"*/, 23, 'Victor Lira');
console.log(eurowings);

book.call(lufthansa, 33, 'Sandra adriana')
console.log(lufthansa);

//-------------------------------------

const swiss = {
    airline: 'Swiss Air Line',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 38, 'Cristiano Ronaldo')
console.log(swiss);

//----------------------------------------------------------------------------------



//THE BIND METHOD
//-----------------------------------------------------------------------------------


//the bind methos returns a new funtion
//guardamos o retorno de bind em um váriavel para usar quantas vezes precisar
//assim podemos uma função para cada objeto

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'steeven william')
bookLX(27, 'jessica rabbit')
bookLH(93, 'julia steeve')

/* o método bind recebe dois argumentos, porém no exemplo abaixo nós ja estamos 
passando o primeiro argumento então na função "bookEW23" o primeiro valor será
23 toda vez quen invorcarmos a função*/
const bookEW23 = book.bind(eurowings,23);
bookEW23('Jonas diego')

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
    console.log(this);

    this.planes++
    console.log(this.planes)
}

lufthansa.buyPlanes()

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;

console.log(0.1, 200);

const addVat = addTax.bind(null, 0.23);

console.log(addVat(100));
console.log(addVat(23));

//challenge 
const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate
    }
}

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));