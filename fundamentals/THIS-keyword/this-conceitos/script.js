'use strict'
//this keyword em uma função ordinária retornará undefined, se estiver usando strict mode

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };

// calcAge(1980);

//------------------------------------


// const myAge = birthYear => {
//     console.log(birthYear - 30);
//     console.log(this);
// };

// myAge(233);

//------------------------------------

//ao chamar o método, o THIS de dentro do método irá ser o objeto que chama o método

const jonas = {
    year: 1997,
    calcAge: function () {
        console.log(this)
        console.log(2037 - this.year)
    }
}

// jonas.calcAge(); //jonas é o objeto que chama o método

const matilda = {
    year: 2017,
}

matilda.calcAge = jonas.calcAge // o método calcAge é atribuido no objeto matilda 

matilda.calcAge(); //matilda é o objeto que chama o método

//sempre anexe o objeto + método
// //------------------------------------
