const markTall = 1.88
const markWeight = 95
const markImc = markWeight / markTall ** 2


const johnTall = 1.76 
const johnWeight = 85
const johnImc = johnWeight / johnTall ** 2

const markHigherBMI = markImc > johnImc

console.log(markHigherBMI)