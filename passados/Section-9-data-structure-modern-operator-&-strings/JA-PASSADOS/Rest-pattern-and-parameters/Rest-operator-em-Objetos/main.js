"use strict";

const restaurant = {
    name: 'Classic italian',
    location: 'Via angelo Tavari 23,  Finzere, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Foccacia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salac'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto', 'carne'],
    order: function (startedIndex, mainIndex) {
        return [this.startMenu[startedIndex], this.mainMenu[mainIndex]];
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`here is your delicious  pasta with ${ing1}
       ${ing2} and ${ing3}`)
    },
    orderPizza: function(mainIngridient, ...otherIngridients) {
        console.log(mainIngridient);
        console.log(otherIngridients);
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


//------------------------------------------
//OBJECTS
const { fri, ...weekdays } = restaurant.openingHours;
console.log(weekdays)

//---------------------------------------