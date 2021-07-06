//ira checar se um número específico existe dentro de um array e irá retornar um boolean

const items = [1, 2, 3, 4, 5, 6];

const includesTwo = items.includes(4);

console.log(includesTwo);

const people = [
  { name: "mauricio" },
  { name: "augusto" },
  { name: "victor" },
  { name: "jeferson" },
];

// let filtrados = people.filter(item => item.name.includes('au'))

let filtrados = people.filter((item, index, arr) => {
  //o filter converter a  condição em um booleano, e ira adicionar ao array atual
  return item.name.includes("au");
});

console.log(filtrados);
