const num = 3323242.23

const options = {
    style: 'unit',//percent, currency
    unit: 'mile-per-hour',//celsius
    currency: 'EUR',
    // useGrouping: false usado para retirar os pontos separadores
}

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('BR: ', new Intl.NumberFormat('pt-BR', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num));