"strict mode";

const PersonProto = {

    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
steven.init('Steven', 1996)
console.log(steven)