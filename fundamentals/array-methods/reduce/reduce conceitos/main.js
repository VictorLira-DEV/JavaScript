const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const total = items.reduce((currentTotal, item) => {
  return currentTotal + item.price;
}, 0);

console.log(total);

//accumulator receberá 0, e o number reberá o primeiro valor do array
// isso se repetirá por todo array

// const numbers = [1, 2, 3];
// const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);

// console.log(sum);
// console.log(numbers);
