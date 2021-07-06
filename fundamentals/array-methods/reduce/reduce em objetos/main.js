//reduce em objetos
let produtos = [
    {nome:'tv',        preco: 1200},
    {nome:'smartphone',preco: 300}
]
let soma = produtos.reduce((a,b) => a + b.preco, 0)
console.log(soma)
