'use strict';

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) {
            //this will be a rejected promisse
            //then propagate all the way down to the catch method
            throw new Error(`${errorMsg} ${response.status}`);
        }

        return response.json(); //json method também retorna uma promessa;
    });
};

//Promise.race
//the faster promise win
(async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/italy`),
        getJSON(`https://restcountries.com/v3.1/name/egypt`),
        getJSON(`https://restcountries.com/v3.1/name/mexico`),
    ]);

    // console.log(res[0]);
})();

const timeout = function(seconds){
    return new Promise(function(_, reject){
        setTimeout(() => {
            reject(new Error('Request took too long!'))
        }, seconds * 1000)
    })
}

Promise.race([
    /* the slower promise will be rejected */
    getJSON(`https://restcountries.com/v3.1/name/tanzania`),
    timeout(0.1)
]).then((res) => {
    console.log(res[0])
}).catch((err) => {
    console.error(err)
})


//Promise.allSettled [es2020]
/* irá retornar toas as promises mesmo que tenha erros
não é possivel usar o catch nesse caso */

Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success')
]).then((res) => {
    console.log(res)
})

//Promise.all
/* podemos fazer várias chamadas AJAX ao mesmo tempo,
porém se uma der erro, todas serão abortadas */
Promise.all([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success')
]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

/* Promise.any [es2021] */
//this gonna return the first fulfilled promise
//rejected promises are ignored
Promise.any([
    Promise.resolve('Success ddd'),
    Promise.reject('Error'),
    Promise.resolve('Another success')
]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})