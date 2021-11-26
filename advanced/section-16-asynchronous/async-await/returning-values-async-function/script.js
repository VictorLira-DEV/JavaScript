'use strict';
const countriesContainer = document.querySelector('.countries');

const renderCountry = data => {
    const html = `
      <article class="country">
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
    countriesContainer.style.opacity = 1;
};

const renderError = text => {
    countriesContainer.insertAdjacentText('beforeend', text);
    countriesContainer.style.opacity = 1;
};

const getPosition = () => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function (country) {
    try {
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;
        const resGeo = await fetch(
            `https://geocode.xyz/${lat},${lng}?geoit=json`
        );
        if (!resGeo.ok) throw new Error('Problem getting location data');
        const dataGeo = await resGeo.json();

        //--------------

        const res = await fetch(
            `https://restcountries.com/v3.1/name/${dataGeo.country}`
        );
        if (!res.ok) throw new Error('Problem getting location data');
        const data = await res.json();
        renderCountry(data[0]);
        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (error) {
        console.error(error);
        renderError(`${error.message} xxc`);

        // reject promise returned from async function
        throw error;
    }
};

/* THEN */

// console.log('1: will get location');
// whereAmI()
//     .then(city => {
//         console.log(`2: ${city}`);
//     })
//     .catch(error => {
//         console.error(`2: ${error.message}`);
//     }).finally(() => {
//         console.log('3: finished getting location');
//     })

/* ASYNC */
// console.log('1: will get location');
// const callWhereAmI = async () => {
//     try {
//         const city = await whereAmI();
//         console.log(`2: ${city}`);
//     } catch (error) {
//         console.error(`2: ${error.message}`);
//     }
//      console.log('3: finished getting location');
//
// };

// callWhereAmI();
/* iffes */
(async function () {
    console.log('1: will get location');
    try {
        const city = await whereAmI();
        console.log(`2: ${city}`);
    } catch (error) {
        console.error(`2: ${error.message}`);
    }
    console.log('3: finished getting location');
})();
