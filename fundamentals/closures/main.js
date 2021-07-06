//Closure é quando um função "lembra"
//seu escopo léxico, mesmo quando a função
//é executada fora desse escopo léxico
//closure é o ato de acessar variaveis fora da função
//everything on the inside has access to things on the outside
//a função interna possui a capacidade de lembrar. das variaveis definidadas externas, mesmo depois de função externa ter sido finalizada
//permite que vc trave o escopo e retorná o valor da função interna apenas quando for chamado

 function func1(name){
     const saudacao = 'olá ' + name
     function func1b(){
         console.log(saudacao)
    }
    return func1b
 }

func1('Tulio Faria')

const saudarOtulio = func1('')


function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log('outer Function: ' + outerVariable)
        console.log('inner Function: ' + innerVariable)
    }
}

let newFunction = outerFunction('outside')
newFunction('inside')
