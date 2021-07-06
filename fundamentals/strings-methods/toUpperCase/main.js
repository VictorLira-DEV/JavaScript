const passanger = 'JoNas';
const passangerLower = passanger.toLowerCase();
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);

console.log(passangerCorrect);


function fixCapitalization(name) {
    const toLower = name.toLowerCase()
    const correct = toLower[0].toUpperCase() + toLower.slice(1)
    console.log(correct)
}

fixCapitalization('ViCtOr');
fixCapitalization('victor');
fixCapitalization('VICTOR');
fixCapitalization('vICTOR');
fixCapitalization('victor');