const friends = ['Victor','Junior','Amanda']
const firstName = ' Victor'
const years1 = new Array(1991, 1998, 1996, 1995)

console.log(friends[friends.length - 1])//this is an expression, last element
const jonas = [firstName, 'Sulivan', 2021 - 1997, 'teacher', friends]
console.log(jonas)

//
function calcAges(birthyear){
    return 2037 - birthyear
}

const years2 = [1997, 1996, 1995, 1994]

const ages = [calcAges(years2[0]), calcAges(years2[1]), calcAges(years2[years2.length - 1])];
console.log(ages)
