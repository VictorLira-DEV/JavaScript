const flights =
    '_Delayed_Departure;fao93966109;txl2133758440;11:25+_Arrival;bru0943384722;fao9376610;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766107;lis2323639855;12:30';


const flightArray = flights.split('+');

const getCode = str => str.slice(0, 3).toUpperCase();
for (let item of flightArray){
    const [type, from, to, time] = item.split(';')
    let i = `${type.startsWith('_Dela') ? '*' : ''} ${type.replaceAll('_', ' ')}  from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`

    console.log(i.padStart(45, ' '))
} 