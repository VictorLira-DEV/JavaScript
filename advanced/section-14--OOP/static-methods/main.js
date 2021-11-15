"strict mode";

const Person = function (firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.BirthYear = birthYear;
};

Person.hey = function () {
    /* o this será referente a função construtora Person
    pois a mesma é a qual está invocando o método 
    por isso o this pertence a mesma */
    console.log(this);
    console.log("Hey there");
};

const victor = new Person("Victor", 1997);

Person.hey();
//victor.hey() victor não irá herdar o método "hey", pois o mesmo é estático
//ou seja não usamos o protótipo para definir o método
//por isso não pode ser herdada
//-------------------------------------

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //these are instance methods which means thet will be added to the prototype
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    greet() {
        console.log(2021 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }
    set fullName(name) {
        console.log(name);
        if (name.includes(" ")) {
            this._fullName = name;
        } else {
            alert(`${name} is not a full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }
    //static method
    static hey() {
        console.log("hey there");
        console.log(this);
    }
}

PersonCl.hey() // método estático não pode ser hedado pelas intancias, ou seja os 
//objetos criados a partir dessa classe
