//maior nome
//quantidade de caracteres

// let pessoas = [
//   "victor dos santos",
//   "ana lucia de oliveira",
//   "adriana dos santos reis",
// ];
// let tamanhoNome = 0;
// let nome = "";

// function maiorNome(item, index, arr) {
//   if (pessoas[index].length > tamanhoNome) {
//     nome = pessoas[index];
//     tamanhoNome = pessoas[index].length;
//   }
// }

// pessoas.forEach(maiorNome);

// console.log(nome);
// console.log(tamanhoNome);

/*REMOVING WHITE SPACE */

let people = [
  "Victor dos santos lira",
  "Adriana dos santos reis",
  "marcela de oliveira pereira amaral costa",
];

let nome = "";
let tamanhoDoNome = 0;

people.forEach((item, index, arr) => {
  if (people[index].length > tamanhoDoNome) {
    nome = people[index];
    tamanhoDoNome = people[index].length;
  }
});

console.log(nome);
console.log(tamanhoDoNome);
