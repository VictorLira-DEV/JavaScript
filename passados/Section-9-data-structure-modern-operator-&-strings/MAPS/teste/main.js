'use strict'

let question = new Map([
    ['question', 'qual a sua banda favorita?'],
    [1, 'Avenged Sevenfold'],
    [2, 'Nirvana'],
    [3, 'Guns and Roses'],
    ['correct', 1],
    [true, 'Your answer is correct'],
    [false, 'Your answer is wrong']
])


let answer = 1
let answer2 = 2

// console.log(question.has(5))
// console.log(question.keys())
// question.set(4, 'Romones')

console.log(question.get(question.get('correct') == answer))
console.log(question.get(question.get('correct') == answer2))


//convertendo um object para Map

const weekday = {
    thu: {
        open: 0,
        close: 10
    },
    sun: {
        open: 0,
        close: 10
    },
    mon: {
        open: 3,
        close: 22
    }
}

const weekMap = new Map(Object.entries(weekday))

const weekArray = [...weekMap]
console.log(weekArray.)
