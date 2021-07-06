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

const hasInexpensiveitems = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveitems)

//irá retorna o valor boolean true or false */

const team = [
    { id: 12, name:'tipper Harley',  pilot: true},
    { id: 44, name:'Ramada Thompson',pilot: false},
    { id: 59, name:'pete thompson' , pilot: false},
    { id: 122,name:'Kowalski',       pilot: false}
]

console.log(team.some(person => person.pilot))
//console.log(team.some(person => person.pilot.id > 1000))