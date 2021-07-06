// import { somar } from "./somar.js";
// import { multiplicar } from "./multiplicar.js";
// import { myself } from "./somar.js";

import { people } from "./somar.js";

// let s = somar(10, 20);
// console.log(s);

// let m = multiplicar(10, 100);
// console.log(m);

// let resultado = myself("jessica", 23);
// console.log(resultado);

const peopleNames = [];

people.map((item, index) => {
  peopleNames.push({ name: item.name, age: item.age });
});

console.log(peopleNames);
