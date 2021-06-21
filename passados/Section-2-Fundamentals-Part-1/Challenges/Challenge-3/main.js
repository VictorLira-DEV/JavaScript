/*const dolphinsAverage = (96 + 108 + 89) / 3 
const koalasAverage = (88 + 91 + 110) / 3

if(dolphinsAverage > koalasAverage){
    console.log(`dolphins average is ${dolphinsAverage.toFixed(2)} higher than Koalas average`)

}else if(koalasAverage > dolphinsAverage){
    console.log(`Koalas average is ${koalasAverage.toFixed(2)} higher than Dolphin average`)

}else{
    console.log('Draw')
}

const dolphinsAverage = (97 + 112 + 101) / 3 
const koalasAverage = (109 + 95 + 123) / 3

if(dolphinsAverage > koalasAverage && dolphinsAverage >= 100){
    console.log(`dolphins average is ${dolphinsAverage.toFixed(2)} higher than Koalas average`)

}else if(koalasAverage > dolphinsAverage && koalasAverage >= 100){
    console.log(`Koalas average is ${koalasAverage.toFixed(2)} higher than Dolphin average`)

}else{
    console.log('Draw')
}

*/

const dolphinsAverage = (97 + 112 + 101) / 3 
const koalasAverage = (109 + 95 + 106) / 3
console.log(dolphinsAverage)
console.log(koalasAverage)

if(dolphinsAverage > koalasAverage && dolphinsAverage >= 100){
    console.log(`dolphins win the trophy `)

}else if(koalasAverage > dolphinsAverage && koalasAverage >= 100){
    console.log(`Koalas win the trophy`)

}else if(koalasAverage === dolphinsAverage && dolphinsAverage >= 100 && koalasAverage >= 100){
    console.log('both win the trophy')

}else{
    console.log('no one wins the trophy')
}
