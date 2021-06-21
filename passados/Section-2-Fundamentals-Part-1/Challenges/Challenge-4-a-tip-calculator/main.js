// const bill = 275
const bill = 40
// const bill = 430

const tip  = bill >= 50 && bill <= 300 ? (15 / 100) * bill: (20/100) * bill
console.log(`the tip for this bill: ${bill}, is ${tip}. total value is ${bill + tip}`)