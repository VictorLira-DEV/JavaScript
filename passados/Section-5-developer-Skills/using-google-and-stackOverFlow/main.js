//Problem

//"we work for a company building a smart home thermometer. Our most simply task is this: "given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem

//- what is the temp amplitude?

//- how to compute max and min temperature

//-what is a  sensor  error? and what to do?

// 2) Breaking up into sub-problems

//- how to ignore errors?

//- find max value in temp array

//- find the min value in temp array

//- subtract min from max (amplitude) and return it

const calcTemperature = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }

  return max - min;
};

const amplitude = calcTemperature(temperatures);
console.log(amplitude);

//PROBLEM 2;
//function should now receive two array of two

// 1) understanding the problem
// - with two arrays, should we implement functionality twice? no! just merge  two arrays

//Breaking up into a sub-problems
// - merge two arrays

const calcTemperatureNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTemperatureNew([3, 2, 1], [9, 0, 5]);
console.log(amplitudeNew);
