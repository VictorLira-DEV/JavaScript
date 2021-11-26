'use strict';
const countriesContainer = document.querySelector('.countries');

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

const getCountries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(
        //     `https://restcountries.com/v3.1/name/${c1}`
        // );
        // const [data2] = await getJSON(
        //     `https://restcountries.com/v3.1/name/${c2}`
        // );
        // const [data3] = await getJSON(
        //     `https://restcountries.com/v3.1/name/${c3}`
        // );

        //console.log([data1.capital, data2.capital, data3.capital]);

        /* one rejected promise is enough is for the entire thing to reject as well */
        /* always use this when one promisse don't depends other promise */
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`),
        ]);

        const arr = data.map(d => d[0].capital);
        console.log(arr);
    } catch (error) {
        console.error(error.message);
    }
};

getCountries('portugal', 'brazil', 'germany');
