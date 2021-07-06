

const jonas =  {
    firstName: 'Jonas',
    lastName : 'Schmedtmann',
    age: 2021 - 1997,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

//this is how access properties inside objects
console.log(jonas.lastName)
console.log(jonas['lastName'])


const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


jonas.location = 'Portugal'
jonas['twitter'] = '@jonasdavid'

console.log(` ${jonas.firstName} has ${jonas.friends.length} friends and  his best friend is called ${jonas.friends[0]}`)

// const interestedIn = prompt('what do you want to know about? Choose between firstName, lastName, age, job and friends');
// alert(jonas[interestedIn])
