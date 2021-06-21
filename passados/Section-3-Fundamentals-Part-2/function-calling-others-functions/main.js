
// const cutPieces = function(fruit){
//     return fruit * 4
// }


// const fruitProcessor = function(apples, oranges){
//     const applePieces = cutPieces(apples)
//     const orangePieces = cutPieces(oranges)
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`
//     return juice
// }

// const myJuice = fruitProcessor(2, 4)
// console.log(myJuice)






const calcAge = function(birthYear){
    return 2021 - birthYear
}

const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear)
    const retirement = 65 - age

    if(retirement > 0){
        return retirement
    }else{
        return -1
    }
}

console.log(yearsUntilRetirement(1997, 'Victor'));
console.log(yearsUntilRetirement(1950, 'mike'));

