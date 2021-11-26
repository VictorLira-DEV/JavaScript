'use strict';

const lotteryPromisse = new Promise(function (resolve, reject) {
    console.log('start');
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            //resolve means fulfilled promisse
            resolve('You win');
        } else {
            //this will be handled in the catch method
            reject(new Error('You lost your money'));
        }
    }, 2000);

    console.log('end');
});

lotteryPromisse
    .then(res => {
        console.log(res);
    })
    .catch(err => [console.error(err)]);

//Promissifying settimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(1)
    .then(() => {
        console.log('1 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('2 second passed');
        return wait(2);
    })
    .then(() => {
        console.log('3 second passed');
        return wait(3);
    })
    .then(() => {
        console.log('4 second passed');
        return wait(4);
    });

//-------------------------

Promise.resolve('abc').then((x) => {
    console.log(x)
})

Promise.reject(new Error('Problem!')).catch((x) => {
    console.error(x)
})
