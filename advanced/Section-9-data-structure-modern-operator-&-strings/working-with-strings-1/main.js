'use strict'
/*a string se comporta de forma parecida com array
podemos acessar cada letra se baseando no index,
inclusive podemos usar alguns métodos
*/
const airline = 'Tap Air Portugal';
const plane = 'A320'

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[1]);
console.log(airline.length)

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('Portugal'));

console.log(airline.slice(4));//the (4) is when the method will begin, it returns a new string
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' '))); 
console.log(airline.slice(airline.lastIndexOf(' ') + 1))

console.log(airline.slice(-2))//irá começar a contar a partir de traz
console.log(airline.slice(1, -1))

const checkMiddleSeat = function (seat) {
    //B  and E are middle seats
    const s = seat.slice(-1)//last caracter
    if (s === 'B' || s === 'E') {
        console.log('you got the middle seat')
    } else {
        console.log('You got lucky')
    }
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

let name = 'Victor'

console.log(name.slice(-1))