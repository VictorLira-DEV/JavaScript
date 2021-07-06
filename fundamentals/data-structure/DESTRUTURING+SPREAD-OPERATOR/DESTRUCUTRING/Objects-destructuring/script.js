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

//---------------------------------------------------------------------------------------------------
//destructuring em objetos
const { name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
//colocando um valor padrão, caso  o valor solicitado não exista
const { menu = [], startMenu: starteing = [] } = restaurant;
//------------------------------------------------------------------------------------------------------


//nested objects
const { fri: {open, close} } = openingHours;
console.log(open, close)

//-------------------------------------------------Nested

const { openingHours } = restaurant;

const { name, mainMenu: [pizza, pasta, risotto] } = restaurant

const { fri: {open: friOpen, close: friClose}, thu: {open: thuOpen, close: thuClose} } = openingHours;
console.log(friOpen, friClose)
console.log(thuOpen, thuClose)
//---------------------------------------------------

///--------------------------------------------------------------

// use '{}' to destruct objects
// use '[]' to destruct array

const personOne = {
    name: "Kyle",
    age: 24,
    address: {
      city: "somewhere else",
      state: "another  one of them",
    },
  };
  
  const personTwo = {
    name: "Victor",
    age: 23,
    favoriteFood: "Pizza",
    bestMusic: "lose yourself",
    address: {
      city: "Cariacica",
      state: "Espirito Santo",
      street: "estrada Caçaroca",
    },
  };
  
  const {
    name: userName,
    age: userAge,
    address: { street, city },
  } = personTwo;
  
  // console.log(userAge, userName)




