console.log(5 % 2); //restante

//Checking if it is a even number
//we use the Number % 2
//and the resoult should be 0
console.log(6 % 2);

//odd number
console.log(7 % 2);

const isEven = n => {
    if (n % 2 === 0) {
        console.log(`${n} is an even Number`)
    } else {
        console.log(`${n} is an odd Number`)
    }
}

isEven(2);
isEven(6);
isEven(7);
