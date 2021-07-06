const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
    //we can compute property names instead of write them manually
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23
    },
    [weekdays[5]]: {
        open: 0, //open 24 hours
        close: 12 + 12  
    },
};

const restaurant = {
    name: 'Classic italian',
    location: 'Via angelo Tavari 23,  Finzere, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Foccacia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salac'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //OLD-SYNTAX
    // order: function (startedIndex, mainIndex) {
    //     return [this.startMenu[startedIndex], this.mainMenu[mainIndex]];
    // },
    //ES6-SYNTAX - METHOD
    order(startedIndex, mainIndex) {
        return [this.startMenu[startedIndex], this.mainMenu[mainIndex]];
    }, 
    orderDelivery({startedIndex = 1, mainIndex = 1, time = '20:00', address}) {
        console.log(`ordered received ${this.startMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    },
    openingHours //ENHANCED OBJECT LITERAL we can add an object from the out side, like this one
}

console.log(restaurant)