const name = '3'
const splitedName = name.split('');
splitedName.forEach(item => {
    let n = Number(item);
    if (n >= 0) {
        console.log('has numbers')
    } else {
        console.log("doesn't has numbers")
    }
})