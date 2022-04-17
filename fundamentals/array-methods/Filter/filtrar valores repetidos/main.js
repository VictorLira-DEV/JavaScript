//PENDENCIA

const currentArray = [1, 1, 1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 5];

const filteredItems = currentArray.filter((item, index, arr) => {
  console.log(item, index);
  return arr.indexOf(item) === index;
  //indexOf retorna a primeira ocorrencia do argumento
});

console.log(filteredItems);

const nome = "ictorV";

console.log(nome.indexOf("V"));
