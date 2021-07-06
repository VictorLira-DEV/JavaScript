//FILTER EM OBJETOS

const currentArray = [
    {nome:'victor',     idade: 34},
    {nome:'jessica',    idade: 23},
    {nome:'kamily',     idade: 22},
    {nome:'anna clara', idade:12},
    {nome:'karol',      idade:12}
]

const newArray = currentArray.filter((item, index, arr) => {
    return item.idade < 18
})

console.log(newArray)


