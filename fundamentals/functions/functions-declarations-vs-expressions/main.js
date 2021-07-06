
//function declaration
// you can  call this function before creating it

// function calcAge1(birthYear){
//     return 2021 - birthYear
// }
// const age1 = calcAge1(1997)

// //function expression
// //you cannot  call this funtions before creating it

// const calcAge2 = function (birthYear){
//     return 2021 - birthYear
// }
// const age2 = calcAge2(1997)


// console.log(age1, age2)

//arrow function

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1997);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear 
    const retirement = 65 - age
    console.log(`${firstName} retires in ${retirement} years`)
}

yearsUntilRetirement(1997, 'Victor')
yearsUntilRetirement(1991, 'Jonas')