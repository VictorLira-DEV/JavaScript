//flat remove those nested array the put it together
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 10];
// console.log(arr.flat());

//flat objects;
const obj = [
  [
    { name: "Pc Gamer", price: 1200 },
    { name: "Video Game", price: 4000 },
  ],

  [
    { name: "Smartphone", price: 1200 },
    { name: "Tel", price: 200 },
  ],
];

// console.log(obj.flat());

//DEEP NESTED ARRAY

const deepArr = [
  [1, 2, 3],
  [4, 5, [6, 7, [8, 9]]],
];

console.log(deepArr.flat(3)) //(3) nível de profundidade do aninhamento
