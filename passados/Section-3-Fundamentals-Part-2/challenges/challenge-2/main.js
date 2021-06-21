

const calcTip = function(bill){
    let tip = 0
    if (bill >= 50 && bill <= 300) {
        tip = (15 / 100) * bill
        return tip

    } else if(bill > 300) {
        tip = (20 / 100) * bill
        return tip
    }else{
        return 0
    }
}

const bill = [125,555,44]
const newArray = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[bill.length - 1])]
const total = [bill[0] + newArray[0],bill[1] + newArray[1],bill[2] + newArray[2]]

console.log(newArray)
console.log(total)

