
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

//
const calcTip = function(value){
    if (value >= 50 && value <= 300) {
        return (15 / 100) * value
        // let tip = (15 / 100) * value
        // tips.push(tip)
        // totals.push(tip + value)  //<------essa não é a melhor for de fazer
    } else {         //o certo e retornar valores
        return (20 / 100) * value
         // let tip = (15 / 100) * value  //<------essa não é a melhor for de fazer
         // tips.push(tip)
         // totals.push(tip + value)

    }
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
}

console.log(tips)
console.log(totals)

//calcular a média
const calcAverage = function (arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length
}

console.log(calcAverage([2,3,6]))
