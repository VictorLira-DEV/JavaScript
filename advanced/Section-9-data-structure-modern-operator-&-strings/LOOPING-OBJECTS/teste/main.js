'use strict'
//objects are not literables
let currentYear = new Date().getFullYear();

const openingHours = {
    thus: {
        open: 0,
        close: 12
    },
    fri: {
        open: 0,
        close: 10
    },
    sat: {
        open: 0,
        close: 9
    },
    // currentYear: 2021,
    // pessoas: {
    //     nome: 'Victor',
    //     nasc: 1997
    // },
    // writeString: function () {
    //     console.log(`my name is ${this.pessoas.nome}, I'm ${currentYear - this.pessoas.nasc} years Old`)
    // }
}

// const properties = Object.keys(openingHours);
// const values = Object.values(openingHours);

// for (const {open, close} of values ){
//     console.log(open, close)
// }

//-------------------------------------------NESTED OBJECTS--------------------


// const empresa = {
//     funcionario: {
//         nome: 'Jeferson',
//         idade: 63,
//         filhos: {
//             karol: {
//                 cor: 'negra',
//                 idade: 21
//             },
//             pedro: {
//                 cor: 'branco',
//                 idade: 22
//             },
//             henrique: {
//                 cor: 'branco',
//                 idade: 23
//             },
//             cassio: {
//                 cor: 'branco',
//                 idade: 24
//             }
//         }
//     }
// }

// const values = Object.values(empresa.funcionario.filhos);



// for (const {cor, idade} of values){
//     console.log(cor, idade)
// };

//--------------------------------------------------------------------------

//desistruturando os objetos

// const openingHours = {
//     thus: {
//         open: 0,
//         close: 12,
//     },
//     fri: {
//         open: 0,
//         close: 10
//     },
//     sat: {
//         open: 0,
//         close: 9
//     }
// }


// const newArr = Object.entries(openingHours)
// // console.log(openingHours, newArr)

// const [key, { open, close }] = newArr[2];

// console.log(`we are open ${key}, ${open} , ${close}`)


const vo = {
    nome: 'Cleide',
    idade: 90,
    filhos: {
        gustavo: {
            idade: 22,
            casado: true,
            filhos: false
        },
        pedro: {
            idade: 56,
            casado: false,
            filhos: false,
        },
        jessica: {
            idade: 45,
            casado: false,
            filhos: true
        }
    }
}

const newVo = Object.entries(vo.filhos)

for (const [key, { idade, casado, filhos}] of newVo) {
    console.log(`nome: ${key}, idade ${idade}, casado ${casado}, filhos ${filhos}`)
}