//PENDENCIA

const currentArray = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

const filteredItems = currentArray.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
  //Index of retorna a primeira ocorrencia do argumento
});

// console.log(filteredItems);

const nome = "Victor";

console.log(nome.indexOf("V"));
