//split
//ira retornar um array
console.log('a+casa+do+vizinho'.split('+'));
console.log('a casa do vizinho'.split(' '));

const [firstName, LastName] = `Victor Lira`.split(' ')
console.log(firstName)


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