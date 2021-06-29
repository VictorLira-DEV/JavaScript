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

//REST EM MÉTODOS
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

//---------------------------------------
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    console.log(sum)
}

add(2, 3);
add(5, 3, 7, 2);
add(2, 4, 6, 8, 0);

const x = [23, 5, 7];
add(...x)

//----------------------------------------------------
// os 3 pontos estão sendo passados como argumentos de uma função, é assim que sabemos que esse é o REST operator e não o spread
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
        return multiplier * element
    })
}

var array = multiply(2, 1, 2, 3);
console.log(array);
