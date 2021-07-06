//boolen 
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boing'));

//-----------------------------

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