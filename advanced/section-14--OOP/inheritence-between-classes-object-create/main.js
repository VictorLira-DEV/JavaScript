"strict mode";
/* com essa versão não precisamos de "constructor"
 não precisamos do "new operator" são apenas objetos
 ligados com outros objetos */

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

// const steven = Object.create(PersonProto);

//Person is the parent class and StudentProto is the child class
//o quê significa que o StudentProto herda do PersonProto
const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course){
    //o método call serve para likar o this
    PersonProto.init.call(this, firstName, birthYear)
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();