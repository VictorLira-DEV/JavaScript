
//create a date
//função construtora
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

/*new date tentará formatar a data corretamente com base no parâmetro */
const now = new Date();
console.log(new Date('Aug 02 2020 18:05:41').toISOString());
console.log(new Date('06 23 2021 17:03:4'));
//using our object
// console.log(new Date(account1.movementsDates[0]))

// //passando horas e minutos
// //o mês inicia do zero
// console.log(new Date(2037, 10, 19, 15, 23, 5));

// console.log(new Date(0))


//working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// // console.log(future.getFullYear());
// // console.log(future.getMonth()); //zero based
// // console.log(future.getDate()); //day. zero based
// // console.log(future.getHours());
// // console.log(future.getMinutes());
// // console.log(future.getSeconds());

// /*The toISOString() method converts a Date object into a string, using the ISO standard.*/
// console.log(future.toISOString());
// /*getTime() retorna os milisegundos */
// console.log(future.getTime());
// // console.log(new Date(2142267780000))

// // future.setFullYear(2040);
// // console.log(future);
