//add elemensts
const friends = ['Anna', 'Jessica', 'Michelle']
friends.push('Jeferson') //add an element in the last position
friends.unshift('Diego') //add an element in the first position

//remove elements
const popped = friends.pop() //remove the last element
const shifted = friends.shift() // remove the first element of this array method

console.log(friends)
console.log(popped)
console.log(shifted)


console.log(friends.indexOf('Jessica'))
console.log(friends.indexOf('bob'))

console.log(friends.includes('Jessica'))
console.log(friends.includes('bob'))