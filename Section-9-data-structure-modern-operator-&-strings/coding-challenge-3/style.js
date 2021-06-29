// 'use strict'

// // const gameEvents = new Map([
// //     [17, 'Goal'],
// //     [36, 'Substitution'],
// //     [47, 'Goal'],
// //     [61, 'Substitution'],
// //     [64, 'Yellow Card'],
// //     [69, 'Red Card'],
// //     [70, 'Substitution'],
// //     [72, 'Subsitution'],
// //     [76, 'Goal'],
// //     [80, 'Goal'],
// //     [92, 'Yellow card']
// // ]);

// //create an array of unique values
// //usando o set, irá remover os valores repedidos 
// //convertemos para array para poder manipular depois
// //delete the yellow card from 64
// // print the message, "An event happened,  on  average, every 9 minutes
// //loop the map check if the event happened after or before 45 m
// const events = [...new Set(gameEvents.values())];
// // console.log(events) 
 
// //2
// gameEvents.delete(64);

// //3
// const time = [...gameEvents.keys()].pop();
// // console.log(`An event happened,  on  average, every ${time / gameEvents.size} minutes`);

// //4

// for (const [min, event] of gameEvents) {
//     const half = min <= 45 ? 'First' : 'Second';
//     // console.log(`${half}[HALF] ${min, event}`);
// }




















const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow Card']
]);

//create an array of unique values
const events = [...new Set(gameEvents.values())]
console.log(events)

//usando o set, irá remover os valores repedidos 
//convertemos para array para poder manipular depois
//delete the yellow card from 64
gameEvents.delete(64);
console.log(gameEvents)
// print the message, "An event happened,  on  average, every 9 minutes
let time = [...gameEvents.keys()].pop()
console.log(`an event happened, on avarage, every ${time / gameEvents.size} `)
//loop the map check if the event happened after or before 45 m