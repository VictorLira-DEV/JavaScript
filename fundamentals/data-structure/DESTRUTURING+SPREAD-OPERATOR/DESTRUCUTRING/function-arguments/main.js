const personOne = {
    name : 'Kyle',
    age : 24,
    favoriteFood : 'Pizza',
    address: {
        city: 'somewhere else',
        state: 'another  one of them'
    }
}

function printUser ({name, age, favoriteFood ='watermelon'}) {
    console.log((`Name is ${name}. age is ${age}. Food is ${favoriteFood}`))
}

printUser(personOne)