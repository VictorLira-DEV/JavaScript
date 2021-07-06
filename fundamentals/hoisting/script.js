'use strict'

// declarações de funções são hoisted, portando é possivel acessar o valor antes de serem declaradas

// sum(3,3)
// function sum(a,b) {
//     console.log(a + b)
// }

//-----------------------
/*function expressions e arrow funtions se comportam como suas respectivas variaveis
 não temos acesso ao valor porém o javascrip escaneia o código e sabe que o valor irá ser atribuido e  retorna o valor como não iniciado*/

// multiply(a, b)  

// const multiply = () => {
//     console.log(a,b)
// }

//-----------------------

// myName('Jonas','Lyra')

// const myName = function (firstName, lastName) {
//     console.log('meu nome' + firstName + lastName)
// }

//-----------------------

// o identificador 'var' é === undefined
// o identificador 'const' é === unitialized
// o identificador 'let' é === unitialized

// console.log(casa)
console.log(cor)
// console.log(nome)

const casa = 'amarela'
var cor = 'branca'
let nome = 'linda'