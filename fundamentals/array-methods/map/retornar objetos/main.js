// retornando objetos
/*
const products = [
    {name:'phone', price: 1200, count: 5},
    {name:'tv',    price: 500,  count: 4},
    {name:'whatch',price: 4000, count: 200},
    {name:'radio', price: 1000, count: 10}
]


const total = products.map((item, index, arr) => ({
    name: item.name, 
    totalValue: item.price * item.count // a propriedade  totalValue foi criada dentro da função
}));

console.log(products)
console.log(total)
*/

//----------------------------------------

// const products = [
//   { name: "cellphone", price: 300, count: 5 },
//   { name: "television", price: 600, count: 6 },
//   { name: "radio", price: 100, count: 3 },
// ];

// let totalValue = products.map((item, index, arr) => ({
//   name: item.name,
//   total: item.price * item.count,
// }));

// console.log(totalValue);

//----------------------------------------

const pessoa = [
  { firstName: "Victor", lastName: "Lyra", age: 56 },
  { firstName: "Gustavo", lastName: "Oliver", age: 33 },
];

let fullName = [];

pessoa.map((item, index) => {
  fullName.push({
    fullName: item.firstName + " " + item.lastName,
    age: item.age,
  });
});

console.log(fullName);
