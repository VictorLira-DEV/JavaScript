// ways of creating arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6));

const x = new Array(7);

//empty arrays + fill methods
// x.fill(1);
x.fill(1, 3, 5); //it will start after 3, it will end before 5
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//CREATING AN ARRAY FROM THE SCRATCH
//array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);






