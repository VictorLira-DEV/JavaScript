var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Banana");

console.log(a);

const people = [
  { name: "Priscila", age: 23 },
  { name: "Steven", age: 40 },
  { name: "Stefanny", age: 12 },
];


console.log(people.findIndex((item) => item.name === 'Stefanny' ))