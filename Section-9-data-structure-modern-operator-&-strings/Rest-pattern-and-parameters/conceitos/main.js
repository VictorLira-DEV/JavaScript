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

//A ENTRE OS DOIS É QUE O SPREAP TIRA OS VALORES DO ARRAY A COLOCA-OS SEPARADOS
// E O REST PEGA OS VALORES SEPARADOS E COLOCA DENTRO DE UM ARRAY
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');


// o rest element precisa ser o ultimo element

const [pizza, , risoto, ,...otherFood/*(rest)*/] = [...restaurant.mainMenu, ...restaurant.startMenu]

console.log(pizza, risoto, otherFood)
//-------------------------------------------

//SPREAD is on right side of =
const arr = [1, 2, ...[3, 4]];
//REST is on the left side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
