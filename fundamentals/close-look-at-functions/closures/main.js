'use strict';
// toda função tem acesso ao ambiente da variavel do contexto da execução em que a função foi criada
// closure: ambiente da variavel ligada a uma função, exatamente do lugar e no tempo que função foi criada
// closure permaneça mesmo após o contexto de execução estiver encerrado
/* no caso abaixo o "booker" foi criado no contexto de execução de "securityBooking" 
podemos manipular as variaveis dentro de securityBooking através do book graças ao closure, mantemos a ligaçao 
das variaveis*/
/* a closure  makes sure that a function does never loose conection to a variable that existed at a function'birth
place*/
// we cannot manipulate closure

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passangers`)
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker)

//example 1
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2)
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2)
    };
}

g();
f();

//re-assigning f function

h();
f();

//example 2

const boardPassengers = function (n, wait) {
    const perGroup = n / 3; //closure ira priorizar essa variavel ao invés ao invés da "perGroup" do escopo global
    //o set time out foi executado de form independente do seu contexto de criação, mas mesmo assim possui acesso as variaveis
    setTimeout(function () { //this is a callback function 
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`there are 3 groups, each with ${perGroup} passangers`);

    }, wait * 1000)

    //esse console será executado antes do set time out
    console.log(`will start boarding in ${wait} seconds `)
};

const perGroup = 1000;
boardPassengers(180, 3);