let movements = [22, 500, 3000, 3, 1, 5000, 1];

const balance = movements.reduce((acumulador, item, index, arr) => {
    console.log(`Iteration  ${index} : ${acumulador}`)
    return acumulador + item
}, 10); //initial value

console.log(balance);

//-----------------------------

let balance2 = 0;
for (const mov of movements){
    balance2 += mov
}

console.log(balance2);

//Maximum value

const max = movements.reduce((acc, mov) => {
    if (acc > mov)  return acc; 
    else  return mov
}, movements[0])

console.log(max)