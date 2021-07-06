/*let casas = [
    {cor:'amarela', valor: 1000},
    {cor:'azul', valor: 2000}
]

let total = casas.map( item => item.valor * 4).reduce((a, b) => a + b, 0)

console.log(total)


console.log('hello world')
*/



const pessoas = [
    {
        nome: 'Victor',
        idade: 500
    },{
        nome: 'josé',
        idade: 1000
    }
]

let soma = pessoas.map((item, index, arr) => {
    return item.idade * 2
}).reduce((currentValue, value) => (currentValue + value))

console.log(soma)







