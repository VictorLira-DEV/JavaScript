'use strict';

/* a função greet está retornando uma função, para chamar essa função devemos, primeiro guardar o resultado 
em uma variável */

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('hello')('jonas');

//---------------------


// const greet = greeting => name => console.log(`${greeting} ${name}`)

// greet('hey')('Victotr');