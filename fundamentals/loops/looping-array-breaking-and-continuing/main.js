const jonas = [
    'Jonas',
    'shredman',
    2037 - 1997,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]

const types = []

for(let i = 0; i < jonas.length; i++){
    // console.log(jonas[i], typeof(jonas[i]))
    // types[i] = typeof jonas[i]
    types.push(typeof jonas[i])
}

// console.log(types)

//

const years = [1991, 1998, 1997, 2021, 1950];
const ages = []

for(let i = 0; i <= years.length -1; i++){
    ages.push(2021 - years[i])         
}

// console.log(ages)
// console.log(years.length)

// continue and break
console.log('=== only strings')
for(let i = 0; i <= jonas.length -1; i++){
    if(typeof jonas[i] !== 'string') continue
    console.log(jonas[i], typeof jonas[i])
}


// break with number
console.log('=== break with number')
for(let i = 0; i <= jonas.length -1; i++){
    if(typeof jonas[i] === 'number') break
    console.log(jonas[i], typeof jonas[i])
}  x