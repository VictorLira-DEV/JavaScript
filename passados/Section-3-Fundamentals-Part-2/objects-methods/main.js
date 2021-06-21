

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmentman',
    birthYear: 1997,
    job: 'developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: false,
    // calcAge: function (birthYear){
    //     return 2037 - birthYear
    // },

    // calcAge: function (){
    //     console.log(this)
    //     return 2037 - this.birthYear
    // },

    
    calcAge: function (){ //this is a method
        this.age = 2037 - this.birthYear
        return this.age
    },

    getSumary: function (){ // this is a method
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, an he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
    }
}

console.log(jonas.calcAge())
// // console.log(jonas['calcAge'](1997))
// console.log(jonas.age) 
// console.log(jonas)

console.log(jonas.getSumary())