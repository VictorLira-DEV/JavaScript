//split
//ira retornar um array
console.log('a+casa+do+vizinho'.split('+'));
console.log('a casa do vizinho'.split(' '));

const [firstName, LastName] = `Victor Lira`.split(' ')
console.log(firstName)

//join
//ira juntar e entre os espaços irá inserir o que estiver entre os parametros do JOIN
const newName = ['Mr', firstName, LastName.toUpperCase()].join(' ')
console.log(newName)

//----------------------------------------

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names){
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmediun');


//padding

const message = 'Go to gate 23';

console.log(message.padStart(25, '+').padEnd('35', '+'));
console.log('Jonas'.padStart(25, '+').padEnd('40', '+'));


//mask your credit card

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}


console.log(maskCreditCard(3949398349));
console.log(maskCreditCard('17239865770'));


//Repeat

const message2 = 'Bad weather... All departues Delayed...';

console.log(message2.repeat(10));


const planesInline = function (n) {
    console.log(`there are ${n} planes in line ${'@'.repeat(n)}`)
}

planesInline(3);
planesInline(5);
planesInline(12);