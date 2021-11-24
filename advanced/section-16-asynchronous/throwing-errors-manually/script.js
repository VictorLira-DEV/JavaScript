'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, img) => {
    const html = `
      <article class="country ${img}">
      <img class="country__img" src="${
          data.flags[Object.keys(data.flags)[0]]
      }" />
      <div class="country__data">
        <h3 class="country__name">${data.name[Object.keys(data.name)[0]]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
            data.languages[Object.keys(data.languages)[0]]
        }</p>
        <p class="country__row"><span>💰</span>${
            data.currencies[Object.keys(data.currencies)[0]].name
        }</p>
      </div>
    </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = message => {
    countriesContainer.insertAdjacentText('beforeend', message);
};

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

// getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)

const getCountryData = function (country) {
    getJSON(
        `https://restcountries.com/v3.1/name/${country}`,
        `Country not found `
    )
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders
                ? data[0].borders[0]
                : data[0].borders;
            if (!neighbour) throw new Error('No neighbour found');

            return getJSON(
                `https://restcountries.com/v3.1/alpha/${neighbour}`,
                'Country not found'
            );
            //don't use 'then' inside other 'then'
            //this is callback hell
            //always return and use outside
        })
        .then(data => {
            renderCountry(data[0], 'neighbour');
            /*this catch will catch any error that apears
                  during this promisse chain.
                  use it in the end */
        })
        .catch(err => {
            renderError(`Something went wrong ${err.message} Try again`);
        })
        .finally(() => {
            // this finally callback function is be called always, not matter the promisse result;
            //we can use this to turn off the spinner
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', () => {
    getCountryData('australia');
});

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(
//             response => {
//                 if (!response.ok) {
//                     //this will be a rejected promisse
//                     //then propagate all the way down to the catch method
//                     throw new Error(`Country not found ${response.status}`);
//                 }

//                 return response.json(); //json method também retorna uma promessa;
//             }
//             //this handler error on internet connection
//             // err => alert(err)
//         )
//         .then(data => {
//             renderCountry(data[0]);
//             // const neighbour = data[0].borders[0];
//             const neighbour = 'data[0].borders[0]';
//             if (!neighbour) return;

//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//             //don't use 'then' inside other 'then'
//             //this is callback hell
//             //always return and use outside
//         })
//         .then(
//             response => {
//                 if (!response.ok) {
//                     //this will be a rejected promisse
//                     //then propagate all the way down to the catch method
//                     throw new Error(`Country not found ${response.status}`);
//                 }
//                 return response.json();
//             }
//             // err => alert(err)
//         )
//         .then(data => {
//             renderCountry(data[0], 'neighbour');
//             /*this catch will catch any error that apears
//       during this promisse chain.
//       use it in the end */
//         })
//         .catch(err => {
//             console.log(`${err} * * *`);
//             renderError(`Something went wrong ${err.message} Try again`);
//         })
//         .finally(() => {
//             //this finally callback function is be called always, not matter the promisse result;
//             //we can use this to turn off the spinner
//             countriesContainer.style.opacity = 1;
//         });
// };

// btn.addEventListener('click', () => {
//     getCountryData('portugal');
// });
