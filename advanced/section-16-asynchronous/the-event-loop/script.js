'use strict';

console.log('test start');

setTimeout(() => {
    /*tempo definido não garante que o código será executado 
    exatamente apó esse tempo */
    console.log('0 second timer', 0)
})

//códigos asyncronos acontecem no ambiente do browser e não no 
//call stack
Promise.resolve('Resolved Promisse 1').then((res) => {
    console.log(res)
})

Promise.resolve('Resolved Promisse 2').then((res) => {
    for (let i = 0; i < 10000000; i++){}

    console.log(res)
})

console.log('test end')

/*callback Queue */
/*é como se fosse um todo list de callback
quando uma promessa é retornado o callback será colocado 
um ordem para ser executo */

/*callback de promessas ficam separadas um um lugar chamado Microtasks que
tem prioridades sobre sobre callback queue normal */