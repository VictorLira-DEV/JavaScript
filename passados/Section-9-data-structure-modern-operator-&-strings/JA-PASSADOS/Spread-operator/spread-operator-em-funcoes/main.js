"use strict";

//SPREAD OPERATOR COMO ARGUMENTO

const restaurant = {
    name: 'Classico',
    mainMenu: ['Pizza', 'Macarrão', 'Lagosta'],
    startMenu: ['Vodka', 'Soda', 'Wine'],
    orderDrink: function (vodka, ...everything/*REST*/) {
        console.log(vodka, everything)
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(ing1, ing2, ing3)
    }
}

restaurant.orderDrink(...restaurant.startMenu)


const ingridients = [
    prompt("let's make a pasta! ingridient 1?"),
    prompt('Ingridient 2?'),
    prompt('Ingridient 3?'),
]

restaurant.orderPasta(...ingridients)


//------------------------------------------------

const fullName = ['Victor', 'Santos', 'lira'];
logMyName(...fullName)

function logMyName(first, second, third) {
    console.log(`My name is ${first} dos ${second} ${third} `)
}
