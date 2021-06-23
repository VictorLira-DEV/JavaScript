let future = new Date(2037, 10, 19, 15, 23);


let calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24)//sec, min, hours, days

let days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

console.log(days1)