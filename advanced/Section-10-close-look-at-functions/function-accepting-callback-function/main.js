'use strict';
// Callback Functions
// A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.


const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}


const upperFistWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//high order function 
const transform = function (str, fn) {
    console.log(`original string: ${str}`);
    console.log(`tranformed string: ${fn(str)}`);
    console.log(`trandormed: by ${fn.name}`) //name seria a propriedade padrão de qualquer função

}

/*this is a higher order function -----> */transform('Javascript is the best', upperFistWord); // <-- upperFirstWord is a callBack function;
transform('Javascript is the best', oneWord);


//------------------------------

function consoleLog() {
    console.log('ok')
}

['carlos', 'victor', 'edigar', 'eduardo'].forEach(consoleLog);

