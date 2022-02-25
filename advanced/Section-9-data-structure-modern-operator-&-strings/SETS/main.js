"use strict";

//EVERYTHING HAS TO BE UNIQUE IN THE SET
//ORDER DOES NOT MATTER
//there is not INDEX IN SETS

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);
console.log(new Set("Jonas"));

for (let order of orderSet) {
  console.log(order);
}
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Brad'));

// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();

// for (const order of orderSet) console.log(order);

// //example
// //REMOVENDO OS VALORES REPETIDOS  E CONVERTENDO SE SET PARA ARRAY USING SPREAD OPERATOR

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)]

// console.log(staffUnique)

// //------------------------
// console.log(new Set('Victor').size);
