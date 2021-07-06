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
    },
    bebidas: {
        cerveja: {
            hasAlcohol: true
        },
        soda: {
            hasAlcohol: false
        },
        wine: {
            hasAlcohol: true
        },
        vodka: {
            hasAlcohol: true
        }
    }
}

// const {soda, ...hasAlcohol} = restauranteEbar.bebidas //rest Operator

// console.log(hasAlcohol)


//---------------------------------------------------------

//SPREAD OPERATOR IN OBJECTS
const newRestaurant = {
    foundedIn: 1998,
    ...restaurant,
    founder: 'Isacc'
}