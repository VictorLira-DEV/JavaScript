'use strict'

//use any data type,  return any data type, short-circuiting
// console.log('---OR---')
// console.log(3 || 'jonas');
// console.log('' || 'jonas')
// console.log(true || 0);
// console.log(undefined || null);
// console.log(null || 4)

//ele vai procurar pelo primeiro valor true, nesse caso o hello
// console.log(undefined || 0 || '' || 'Hello' || 23 || null)

//--------------------------------------------------

const restaurant = {
    nome: 'Classicp Jorge'
}

restaurant.numGuests = null
// irá verificar se o restaurant.numGuests é false, se for false irá atribuir o 10 para ele
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; //o operador '?' não identifica o zero como false
// console.log(guest1)
const  guest2 = restaurant.numGuests || 10 //esse operador vai receber o '0' como false
// console.log(guest2)

//Nulish: null and undefined(NOT 0 or '')
console.log(null ?? undefined ?? 'alert')
const guessCorrect = restaurant.numGuests ?? 10; //esse operador ira receber o '0' como true <<-- this is called nulished coalescing Operator
console.log(guessCorrect)

// O && IRA VALIDAR  ATÉ ENCONTRAR O PRIMEIRO VALOR FALSY, DEPOIS QUE ENCONTRAR ELE IRA PARA A VALIDAÇÃO 
// E RETORNARÁ O VALOR FALSE
//SE O ULTIMO VALOR FOR TRUTHY O MESMO SEÁ RETORNADO

/*esse é um jeito se setar valores padrões, sem precisar lidar com operadores ternários ou if else estatement */
// console.log('---AND---')
// /*se o primeiro valor for falso ele vai pintar o mesmo */
// /*se ambos valores forem true ele irá printar o ultimo */
// console.log(0 && 'Jonas')
// console.log(7 && 'Jonas')

//a execução irá parar assim que encontrar um valor false, pois de qualquer forma os valores seguintes serão falsos
// console.log('Hello' && 23 && 'casa' && 0 && 'casa ')
// console.log('Hello' || 23)


// //pratical example]

const buteco = {  
    orderPizza: function(pedido1, ...otherIngridients) {
        // console.log(`seu pedido foi ${pedido1} e ${otherIngridients}`)
    }
}



// if (buteco.orderPizza) {
//     buteco.orderPizza('mushrooms', 'spinach', 'meet', 'potato') //
// }

buteco.orderPizza && buteco.orderPizza('mushrooms', 'spinach')//podemos usar essa forma ao invés de usar o if acima
