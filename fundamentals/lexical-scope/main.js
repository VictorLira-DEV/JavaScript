//escopo lexical é o fato de funções aninhadas estarem sujeitas a buscar variáveis no escopo acíma delas
// fluxo dessa relação é de fora para dentro
// uma varival declarada dentro de uma função pode ser acessada dentro de uma função aninhada
//indepedente de quantos níveis de aninhamento vc tenha em uma função, a variavel que vc estiver usando em uma função aninhada, vai ser buscada e acessada nos escopos externos a essa função aninhada

// function externa(){

//     const person = {
//         nome: 'Kyle',
//         age: 23,
//         hairColor: 'red',
//         eyesColor: 'blue'
//     }

//     function interna () {
//         const {nome, age, hairColor, eyesColor} = person

//         function extraInterna(){
            
//             function infinite(){
//                 console.log(eyesColor.toUpperCase())
//             }
//             infinite()  
//         }
//         extraInterna()
//     }
//     interna()
// }

// externa()

