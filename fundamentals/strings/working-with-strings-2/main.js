'use strict'
/*a string se comporta de forma parecida com array
podemos acessar cada letra se baseando no index,
inclusive podemos usar alguns métodos
*/
const airline = 'Tap Air Portugal';

// console.log(airline.toLowerCase());
// console.log('jonas'.toUpperCase());

//FIX  CAPITALIZATION IN NAME
const passanger = 'JoNas';
const passangerLower = passanger.toLowerCase();
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);

// console.log(passangerCorrect)

//------------------------------------------------

function fixCapitalization(name) {
    const toLower = name.toLowerCase()
    const correct = toLower[0].toUpperCase() + toLower.slice(1)
    // console.log(correct)
}

fixCapitalization('ViCtOr');
fixCapitalization('victor');
fixCapitalization('VICTOR');
fixCapitalization('vICTOR');
fixCapitalization('victor');

//-----------------------------------------------
//FIXING EMAIL

const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.io \n'
console.log(loginEmail)

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceGB);
console.log(priceUS);
const announcement = 'All passangers come to boarding door 23. boarding door 23!'

console.log(announcement.replace('door', 'gate')) // apenas replace na primeira ocorrencia
console.log(announcement.replaceAll('door', 'gate')) //replace everyone

//boolen 
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the New Airbus family')
}

// pratice exercise 
// when you receive something from the user always put it to lowercase
const checkBaggage = function (items) {
    const baggage = items.toLowerCase('');
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('you are not allowed on board')
    } else {
        console.log('welcome aboard')
    }
}

checkBaggage('I have a leptop, some of Food and a pocket knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and gun for protection')