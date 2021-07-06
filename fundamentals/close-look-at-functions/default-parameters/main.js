'use strict';

const bookings = [];

const creatingBooking = function (flighNum, numPassagers = 1, price = 199) {
    //default values can contain any values

    const booking = {
        flighNum,
        numPassagers,
        price
    };
    console.log(booking);
    bookings.push(booking);
}

creatingBooking('LH123');
creatingBooking('LH123', 2, 800);
creatingBooking('LH123', undefined, 800); //use undefined to don't asign a value