const [firstName, LastName] = `Victor Lira`.split(" "); // split divide e insere em um array
// console.log(firstName)

//join
//ira juntar e entre os espaços irá inserir o que estiver entre os parametros do JOIN
const newName = ["Mr", firstName, LastName.toUpperCase()].join(" ");
console.log(newName)
