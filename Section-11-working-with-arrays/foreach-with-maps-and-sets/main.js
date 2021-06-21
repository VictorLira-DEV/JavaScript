'use strict';

//Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling']
])

currencies.forEach((value, key, map) => {
    console.log(`${key}: ${value}`)
})

//Set
//set não possuem index,
const correnciresUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
correnciresUnique.forEach((value, _ , map) => {
    console.log(`${value}: ${value}`)
})