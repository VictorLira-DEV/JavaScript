// // //CREATING AN ARRAY FROM THE SCRATCH
// //array.from
// // const y = Array.from({ length: 7 }, () => 1);
// // console.log(y);

// // const z = Array.from({ length: 7 }, (_, i) => i + 1);
// // console.log(z);

// // const number = Array.from({ length: 10 }, (_, i) => {
// //   return i + 1;
// // });


const x = new Array(10); //3 stands for the length
x.fill(1, 0, 2)
x.fill(2, 2, 4)
x.fill(3, 4, 6)
x.fill(4, 6, 8)
x.fill(5, 8, 10)

console.log(x)

//Change a name in the array
const users =  ['jeferson', 'Cassia', 'Victor', 'Amanda']
users.fill('Rugal', 2, 3);

console.log(users)