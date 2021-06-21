// const writeHelloWorld = function () {
//     console.log('hello world')
// }

// '' || undefined || null || writeHelloWorld();

//

//---------------------------OR--------------------------
//CHECAR UM OBJETO
const ano = 2021

const person = {
    nome: 'Klésio',
    nasc: 2005,
    // job: 'Programmer'
    underAge: function () {
        ano - this.nasc
    }
}


// console.log(person.nome = 'true' || 'false')