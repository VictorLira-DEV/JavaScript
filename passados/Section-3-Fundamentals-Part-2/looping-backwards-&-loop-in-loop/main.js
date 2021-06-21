const jonas = [
    'jonas',
    'Schemdtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

// for(let i = jonas.length - 1; i >= 0; i--){
//     console.log(jonas[i])
// }



//loop inside loops
for(let i = 1; i <= 3; i++){
    console.log(`--------- starting exercise ${i}`)

    for(let rep = 1; rep <= 5; rep++){
        console.log(`exercise ${i} repetition ${rep}`)
    }
}
