/*Valores por refência altera o valor do objeto, independente da variavel
/*Quando você está passando algo por referência, você está passando algo que aponta para outra coisa, e não uma cópia do objeto. Portanto, como o JavaScript passa objetos por referência, quando você altera uma propriedade desse objeto dentro da função, a alteração será refletida no escopo externo */

/*função com passagem de parametros objetos*/
function somar(a, b, c) {
  {
    pessoa.age = a + b;
    pessoa.filhos = a + c;
  }
}

let pessoa = { age: 22, filhos: 2 };
let person = pessoa;

//note que tando o "pessoa"  quanto o "person" tiveram o valor alterado
somar(pessoa.age, 5, pessoa.filhos);
console.log(pessoa);
console.log(person);
