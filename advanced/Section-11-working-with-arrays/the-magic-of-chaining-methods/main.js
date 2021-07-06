const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const eurToUsd = 1.1;
console.log(movements);

// PIPELINE

const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        console.log(arr)// esse é o array atual
    return mov * eurToUsd;
}).reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD)