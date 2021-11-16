"strict mode";

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

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

    static hey() {
        console.log("hey there");
        console.log(this);
    }
}

PersonCl.hey();

// "extends" fará uma ligação entre os protótipos, por baixo dos panos
class StudentCl extends PersonCl{
    //se não tivesse um terceiro argumento "course" para essa classe
    //não seria necessário uma função construtora
    //poderiamos simplesmente chamar a função
    //passar os parâmetros sem usar o constructor
    //use constructor se precisar de novas propriedades
    constructor(fullName, birthYear, course){
        //Always needs to happern first
        //because super creates the this keyword
        super(fullName, birthYear) //super irá especificar a classe pai;
        this.course = course;
    }

    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}`)
    }

    //esse método sera executado e não o mesmo encontrado no PersonCl
    calcAge(){
        console.log(`I'm ${2037 - this.birthYear} years old, but as student I feel more like ${2037 - this.birthYear + 10} `)
    }

}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha)

martha.introduce();
martha.calcAge()
