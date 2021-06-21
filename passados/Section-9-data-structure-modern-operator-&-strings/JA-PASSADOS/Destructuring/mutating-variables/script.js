'use strict'
const restaurant = {
    name: 'Classic italian',
    location: 'Via angelo Tavari 23,  Finzere, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Foccacia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salac'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (startedIndex, mainIndex) {
        return [this.startMenu[startedIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({startedIndex = 1, mainIndex = 1, time = '20:00', address}) {
        console.log(`ordered received ${this.startMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, //open 24 hours
            close: 24
        }, 
    }
}


restaurant.orderDelivery({
    time: '22: 30',
    address: 'Vila del Sole',
    mainIndex: 0,
    startedIndex: 2
});

//------------------------------------------------------------------------------------------------------------
//default values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r)

//mutating variables
let a = 111;
let b = 999;

const obj = {a: 23, b:7, c: 14};

({ a, b } = obj); // o js não reconhece quando iniciamos uma linha com chaves, por isso usamos chaves



