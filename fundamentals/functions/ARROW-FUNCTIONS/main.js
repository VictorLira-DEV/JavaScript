/*uma função comum cria a sua propria variavel para armazenar o valor
porém a arrow function precisamos criar nossa propria varivel para armazenar o valor*/

function sum (a, b){
    return a + b
}

//arrow function
let sum2 = (a, b) => {
    return a + b
}

//arrow function mais SIMPLIFICADO
/*sabemos que o valor depois do arrow será retonado então omitimos o "return"*/
let sum3 = (a, b) => a + b 


function isPositive(number){
    return number >= 0
}


//arrow function
let isPositive2 = (number) =>{
    return number >= 0
}

//arrow function mais SIMPLIFICADO
/*quando existe apenas um parâmetro tiramos os parêntese do mesmo */
let isPositive3 = number =>  number >= 0


//Arrow function
let randomNumber2 = () =>{
    return Math.random
}

//arrow function mais SIMPLIFICADO
let randomNumber3 = () => Math.random



document.addEventListener('click', function() {
    console.log('click')
})

//Arrow function
document.addEventListener('click', () => console.log('click'))



//chamada
console.log(randomNumber2(3))

