const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
    }
};

//----------------------------------------------
//opção 1
game.scored.forEach((item, index) => {
    console.log(`goal ${index + 1} of ${item}`)
})

// //opção 2
// for (const [i, player] of game.scored.entries()) {
//     console.log(` Goal ${i + 1}: ${player}`)
// }

//---------------------------------
const odds = Object.values(game.odds)
const keys = Object.keys(game.odds)

let average = 0
for (const odd of odds) {
    average += odd; 
}

average /= odds.length;

console.log(`a média de propabilidades é ${average}`)

//-----------------------


for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`)
}


//Used in arrays
// game.scored.entries();

// //Used in  Objects
// Object.entries(game.scored)