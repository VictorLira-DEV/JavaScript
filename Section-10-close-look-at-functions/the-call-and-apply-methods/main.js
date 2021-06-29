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
    airline: 'Euwings',
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

//Apply method
//when dont user apply methods anymore

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(flightData);

//we use spread operator instead
book.call(swiss, ...flightData);