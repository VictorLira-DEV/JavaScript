// 1 classes are not hoisted, iven if they are declarations
// 2 classes are first-class-citizens
// 3 classes are executed in strict mode


// class expression
// const PersonCl = class {

// }

//class declaration
class PersonCl {

    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //os métodos fora do constructor serão adicionas altomaticamente ao protótipo
    calcAge () {
        console.log(2021 - this.birthYear)
    }

    greet () {
        console.log(2021 - this.birthYear)
    }
}

const jessica = new PersonCl('Jessica', 1998);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__)

//adding a method manually 
// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`)
// }

jessica.greet();
