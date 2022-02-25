//Strings 
const owners = ['Amanda', 'Pedro', 'Victor', 'Jessica'];
console.log(owners.sort()); //esse método altera o array original

//Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//return < 0, A is before B (keep order)
//return > 0, B is before A (switch order)

//se A for maior do que B retorne um número maior que zero
//se A for menor que B retorne um número menor que zero

//Ascending
movements.sort((a, b) => {
    console.log(a + 'a')
    if (a > b) return 1;
    if (a < b) return -1;
})
console.log(movements);

// //descending
// movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
// })
// console.log(movements);

// //modo simplificado
// movements.sort((a, b) => a - b);
// console.log(movements);

// //ou 

// movements.sort((a, b) => b - a);
// console.log(movements);
