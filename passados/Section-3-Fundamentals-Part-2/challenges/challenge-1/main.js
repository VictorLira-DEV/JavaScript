
const calcAverage = (a, b, c) => (a + b + c) /3

let avgDolphins = calcAverage(85,54,41)
let avgKoalas = calcAverage(23,34 ,27)

function checkWinner (dolphins, koalas){
    if(dolphins >= koalas * 2){
        console.log(`Dolphins win ${dolphins} vs ${koalas}`)

    }else if(koalas >= dolphins * 2){
        console.log(`koala win ${koalas} vs ${dolphins}`)
    }else{
        console.log('nobody wins')
    }
}

checkWinner(scoreDolphins, scoreKoalas)
