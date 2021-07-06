
/*Valores por refência altera o valor do objeto, independente da variavel
var myName = {firstName: "Victor", age: 12, cor:"azul"};  
var identity = myName
var pessoa = identity
var serHumano = pessoa

myName.age = 22;
console.log(myName.age)
console.log(identity.age)
console.log(pessoa.age)
console.log(serHumano.age)*/


/*dados primitivos primitivos não são alterados pois criar uma cópia em outro espaço na memória */
let name = "victor"
let copia = name
name = "carlos"

console.log(name)
console.log(copia)



/*função compassagem de parametros objetos*/
function somar(a, b) {{

    pessoa.age = a + b

}}

let pessoa = {age: 22, filhos: 2}
let person = pessoa

console.log(somar( pessoa.age, 5))
console.log(pessoa)
console.log(pessoa)


/*tipos primitivos */
function somar2(a, b) {{

    pessoas = a + b

}}

let pessoas = 12
let people = pessoas
console.log(somar2(pessoas, 5 ))
console.log(pessoas)
console.log(people)