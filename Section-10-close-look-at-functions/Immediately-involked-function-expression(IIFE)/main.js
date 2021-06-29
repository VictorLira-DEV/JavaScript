'use strict';
//IIFE

//dessa forma a função será invocada apenas uma vez na aplicação

(function () {
    console.log('this will never run again')
})();

(() => console.log('this will ALSO never run again'))();


//data privacy
{
    const inPrivate = 23;
    var notPrivate = 46;
}

console.log(notPrivate);