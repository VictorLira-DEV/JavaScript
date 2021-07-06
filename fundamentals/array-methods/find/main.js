//The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// const foundItem = items.find((item, index, arr) => {
//   return item.price < 100;
// });

// console.log(items);
// console.log(foundItem);

//resultado booleano, e mostrará o primeiro objeto com o nome solicitado, e retornará o objeto


const account = items.find(acc => acc.name === 'Keyboard');
console.log(account)