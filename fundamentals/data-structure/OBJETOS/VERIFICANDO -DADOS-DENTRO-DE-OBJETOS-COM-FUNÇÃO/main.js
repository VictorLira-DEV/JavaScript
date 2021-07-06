function verificadorDeIdade(testeIdade) {
  if (testeIdade >= 18) {
    console.log(" parabéns vc é maior de idade");
  } else {
    console.log(" vc é menor de idade");
  }
}
//verificadorDeIdade(pessoas[1].idade)

let pessoas = [
  { nome: "victor", idade: 17, cpf: "172.398.657-70" },
  { nome: "Jozy", idade: 28, cpf: "129.239.129-90" },
  { nome: "renaldo", idade: 2, cpf: "129.239.129-90" },
  { nome: "carlos", idade: 22, cpf: "129.239.129-90" },
  { nome: "Jozy", idade: 3, cpf: "129.239.129-90" },
];

verificadorDeIdade(pessoas[2].idade);
