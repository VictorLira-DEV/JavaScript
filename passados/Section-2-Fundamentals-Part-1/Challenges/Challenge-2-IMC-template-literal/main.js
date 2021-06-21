const markTall = 1.90
const markWeight = 200
const markIMC = (markWeight / markTall ** 2).toFixed(2)

const johnTall = 1.90
const johnWeight = 100
const johnIMC = (johnWeight / johnTall ** 2).toFixed(2)

if(markIMC > johnIMC){
    console.log(`Mark IMC ${markIMC} is higher than john IMC ${johnIMC}`)
}else{
    console.log(`John IMC ${johnIMC} is higher than Mark IMC ${markIMC}`)
}