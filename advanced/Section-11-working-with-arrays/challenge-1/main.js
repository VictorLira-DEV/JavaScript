'use strict';

const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];

//-------------

const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

checkDogs(julia2, kate2);

function checkDogs(dogsJulia, dogsKate) {
    const dogsOnly = dogsJulia.slice();
    dogsOnly.splice(0, 1);
    dogsOnly.splice(-2);

    const allDogsAges = dogsKate.concat(dogsOnly);

    allDogsAges.forEach((item, index) => {
        const adult = `dog number ${index + 1} is an adult and is ${item} years old`;
        const puppy = `dog number ${index + 1} is a puppy and is ${item} years old`;

        console.log(item >= 3 ? adult : puppy)
    })
}

