//N1
/*dados primitivos primitivos não são alterados pois criar uma cópia em outro espaço na memória */

function somar2(a, b) {
  {
    pessoas = a + b;
  }
}

let pessoas = 12;
let people = pessoas;
somar2(pessoas, 5);

//perceba que somente o valor de "pessoas" foi altera. o valor de "people" continua o mesmo pois está sepado na memória
console.log(pessoas);
console.log(people);

//N2

// function somar2(nome) {{
// //não afeta o variável "pessoa" pois a mesma possui escopo global e é do tipo "number" um dos tipos primitivos
//     nome += (5 + 5)

// }}

// let pessoa = 12
// somar2(pessoa)

// console.log(pessoas)
// console.log(people)
