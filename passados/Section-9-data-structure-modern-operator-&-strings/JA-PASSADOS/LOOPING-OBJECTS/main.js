'use strict'
//objects are not literables

const openingHours = {
    thus: {
        open: 0,
        close: 12,
    },
    fri: {
        open: 0,
        close: 10
    },
    sat: {
        open: 0,
        close: 9
    }
}

//PROPERTY NAMES
/*Object.keys retorna um ARRAY com exatamente o nome das propriedades do objeto */
// const properties = Object.keys(openingHours);
// let openStr = `we are open on ${ properties.length } days `
// // console.log(properties)

// for (const day of properties) {
//     openStr += `${ day },`
// }
// console.log(openStr)

//------------------------------------------

//PROPERTY VALUES
//retorna um array com os valores no objeto
// const values = Object.values(openingHours)
// console.log(values)

// Entire object
// entries são basicamente nomes e valores juntos    
// ele transforma o objeto em um array, primeiro elemento é a key e segundo é o valor
// podemos assim desestruturar para acesar as propriedades individualmente
// como no exemplo abaixo

// const entries = Object.entries(openingHours);
//     console.log(entries);

// for (const [key, {open, close}] of entries){
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// };  