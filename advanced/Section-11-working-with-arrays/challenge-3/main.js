'use strict';
const data1 = [5, 2, 4, 1, 15, 8];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (dogs) => {
    // const humanAge = dogs.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
    // const adult = humanAge.filter(dogAge => dogAge >= 18);
    // const average = adult.reduce((acc, dogAge) => acc + dogAge) / adult.length

    const humanAgeAverage = dogs
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18 )
        .reduce((acc, age, index, arr) => acc + age / arr.length, 0)
    console.log(humanAgeAverage)
}

calcAverageHumanAge(data1);
