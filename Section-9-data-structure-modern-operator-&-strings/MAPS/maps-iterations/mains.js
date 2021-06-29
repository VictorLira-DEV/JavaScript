'use strict'

//The first element is the key and the second one is the value

const question = new Map([
    [' question ', ' what is the best programming language in the world? '],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'try again!!!!']
])

console.log(question)

//Converting objects to maps
const openingHours = {
    thu: {
        open: 0,
        close: 12
    },
    fri: {
        open: 10,
        close: 22
    },
    sat: {
        open: 1,
        close: 10
    }
}
const hoursMap = new Map(Object.entries(openingHours));

//iteração
//quiz app
// console.log(question.get('question'))
for (const [key, value]  of question){
    if (typeof key === 'number') {
        // console.log(`answer ${key}: ${value} `)
    }
};

const answer = Number(prompt('Your answer'));
// console.log(answer)

// console.log(question.get(question.get('correct') === answer));

//to convert map to array

// console.lor([...question])
// console.lor([...question.keys()])
// console.lor([...question.entries()])