//TABUADA COM FOR EACH
let numeros = [
  { valor: 1 },
  { valor: 2 },
  { valor: 3 },
  { valor: 4 },
  { valor: 5 },
  { valor: 6 },
  { valor: 7 },
  { valor: 8 },
  { valor: 9 },
  { valor: 10 },
];

numeros.forEach((item, index) => {
  console.log(`${index + 1} X ${item.valor} = ${(index + 1) * item.valor}`);
});
