let pessoas =  [
    {nome:"victor",  idade: 12, sexo:'m'},
    {nome:"camila",  idade: 22, sexo:'f'},
    {nome:"gustavo", idade: 33, sexo:'m'},
    {nome:"jessica", idade: 10, sexo:'f'},
    {nome:"henrique",idade: 2, sexo:'m'},
    {nome:"amanda",  idade: 89, sexo:'f'}

]

let menoresIdade = []
let maioresIdade = []

function maiorNome(item, index, arr){
    if(item.idade < 18){
        menoresIdade.push(item)

    }else{
        maioresIdade.push(item)
    }
}

pessoas.forEach(maiorNome)

console.log(menoresIdade)
console.log(maioresIdade)
