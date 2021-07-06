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
    },
};

//----------------------------------------------

//TEACHER'S VERSION
//1
const [player1, player2] = game.players;

//2
const [gk, ...fieldPlayers] = player1

//3
const allPlayers = [...player1, ...player2];
console.log(allPlayers)

//4
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Coutinho', 'Periscic'];

//5
const { odds: { team1, x: drawn, team2 } } = game;
console.log(team1, drawn, team2)

//6
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`)
    console.log(`${players}`)
}

printGoals('Davis', 'Muller', 'Pedro', 'Kimish');
printGoals('Davis', 'Muller');
printGoals(...game.scored)

//7
team1 < team2 && console.log('Team 1  is more likely to win')
team1 > team2 && console.log('Team 2  is more likely to win')


//--------------------------------------------------------------

const pessoas = [
    { name: 'Victor', idade: 25 },
    { name: 'Reinaldo', idade: 37},
    { name: 'Janine', idade: 41 },
    { name: 'Carla', idade: 37 },
    ['primeiro lugar', 'segundo lugar', 'terceiro lugar'],
    [
        { trofeu: 'ouro' },
        { trofeu: 'prata' },
        { trofeu: 'Bronze'}
    ]

]


//REDUCE
// const somaDasIdades = pessoas.reduce((initialValue, idades) => initialValue + idades.idade, 0)
// console.log(somaDasIdades)

const [, , , , , [
    { trofeu: ouro }, ,
    { trofeu: bronze}


]] = pessoas

console.log(ouro, bronze)


const [
    { name: firstPlayerName, idade: FirstPlayerIdade }, , ,
    { name: fourthPlayerName, idade: fouthPlayerIdade },
    [primeiro,, terceiro]
] = pessoas



console.log(firstPlayerName, FirstPlayerIdade)
console.log(fourthPlayerName, fouthPlayerIdade)
console.log(primeiro)
console.log(terceiro)

console.log(allPlayers)