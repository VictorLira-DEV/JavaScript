// let ages = [
//     {nome:'victor', idade: 25},
//     {nome:'victor', idade: 12},
//     {nome:'victor', idade: 2},
//     {nome:'victor', idade: 29},
//     {nome:'victor', idade: 26},
// ]

// let resultado = ages.every((item)=> {
//     return item.idade < 18
// })

// console.log(resultado)

let pilots = [
  { nome: "Victor", hasLicence: true },
  { nome: "Victor", hasLicence: true },
  { nome: "Victor", hasLicence: true },
  { nome: "Victor", hasLicence: true },
];

let canEvebodyDrive = pilots.every((item) => {
  return item.hasLicence === true;
});

console.log(canEvebodyDrive);
