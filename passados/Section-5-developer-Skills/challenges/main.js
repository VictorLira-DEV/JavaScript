// 1)   -- understand the problem and break into pieces

//create a function called printForecast

//call the function passing a array

//it logs a string like this one "17C  ind 1 day... 21C in 2 days... 23C in 3 days..."

const printForecast = function (arr) {
  let srt = "";

  for (let i = 0; i < arr.length; i++) {
    srt = srt + ` ...${arr[i]}ºC in ${i + 1} days`;
  }
  console.log(srt);
};

// const array1 = [17, 21, 23];
const array2 = [12, 5, -5, 0, 4];
printForecast(array2);
