/*ele percorrerá o array e não vai alterar o original, ele vai criar um novo*/
/*podemos passar os seguintes parâmetros "item, index, arr" */
/*
const items = [
    { name: 'Bike',     price: 100},
    { name: 'TV',       price: 200},
    { name: 'Album',    price: 10},
    { name: 'Book',     price: 5},
    { name: 'Phone',    price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25}

]

const ItemNames = items.map((item) => {
    return item.price * 2
})

console.log(items)
console.log(ItemNames) 
*/

// const pessoas = [
//     {nome:'Victor', idade: 23},
//     {nome:'Carlos', idade: 32},
//     {nome:'Jessica', idade: 45},
// ]

// const dobroIdade = pessoas.forEach((item, index, arr) => {
//     return item.idade * 2
// })

// console.log(dobroIdade)
// console.log(pessoas)


const items = [1,2,3,4,5,6,7,8,9,10]


const some = items.map((item, index) => {
    return item 
})


console.log(some)






 