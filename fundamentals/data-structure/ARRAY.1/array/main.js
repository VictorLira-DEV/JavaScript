let numb = [3, 5, 6, 5, 9]
numb.push(1)
//numb.sort() //deixa em ordem
console.log(numb)
console.log(`o valor tem ${numb.length} posições`)
console.log(`o primeiro valor do vetor é ${numb[0]}`)
console.log(`o segundo valor do vetor é o ${numb[1]}`)
let pos = numb.indexOf(9)

if (pos == -1){
    console.log('o valor não foi encontrado')

}  else{
    console.log(`o valor esta na posição ${pos}`)
}

