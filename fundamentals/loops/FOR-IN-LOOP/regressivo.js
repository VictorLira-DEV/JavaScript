// var people = [
//   { name: "victor", idade: "23", sexo: "masculino" },
//   { name: "amanda", idade: "23", sexo: "feminino" },
//   { name: "iago", idade: "36", sexo: "mascilino" },
// ];

// for (let pos in people) {
//   console.log(people[pos].name, people[pos].sexo);
// }

//------------------------------------------

// const pessoa = {
//   name: "victor",
//   idade: 23,
// };

// for (let indice in pessoa) {
//   console.log(indice, pessoa[indice]);
// }

//--------------------------------------------

// const cores = ["vermelho", "azul", "preto", "roxo"];

// // a variavel indice representa exatamente o indice dentro de um array
// for (let indice in cores) {
//   console.log(`elemento ${cores[indice]}`);
// }

const people = [
  {name:'Victor'},
  {name:'Iago'},
  {name:'mim'},
  {name:'Pedro'}
]

for (let i in people) {
  console.log(people[i].name)
}