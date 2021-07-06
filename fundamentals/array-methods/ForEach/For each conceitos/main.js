//podemos passar os seguintes parâmetros, nessa ordem ".forEach((item, index, arr) => {}" 

const meuNomeCompleto = [
    { nome: 'Matheus'},
    { nome: 'Henrique'},
    { nome: 'Castiglione'}
]

// criamos um parâmetro para manipular dentro da arrow function
console.log('N1-logando o valor de cada parte do nome')
meuNomeCompleto.forEach(umaParteDoNome => {
    console.log(umaParteDoNome.nome)
})

console.log('logando o indice de cada parte do nome')
meuNomeCompleto.forEach(function(umaParteDoNome, posicao){
    console.log('A parte ' + umaParteDoNome.nome + ' esta na posicao ' + posicao)
})

console.log('logando cada nome de um array completo')
meuNomeCompleto.forEach((umaParteDoNome, posicao, arrayCompleto) => {
    console.log(umaParteDoNome)
    console.log(posicao)
    console.log(arrayCompleto)
})



