'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, img) => {
  const html = `
    <article class="country ${img}">
    <img class="country__img" src="${data.flags[Object.keys(data.flags)[0]]}" />
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

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      return response.json(); //json method também retorna uma promessa;
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
      //don't use 'then' inside other 'then'
      //this is callback hell
      //always return and use outside
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    });
};

getCountryData('brazil');
