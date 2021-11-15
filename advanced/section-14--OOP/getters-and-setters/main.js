"strict mode";

const account = {
    owner: "Jonas",
    movements: [100, 200, 300],
    //get method is useful when we wanna use it as a property but still have to do some calculation
    get latest() {
        return this.movements.slice(-1).pop();
    },
    // set method needs to have exact one parameter
    set latest(mov) {
        this.movements.push(mov);
    },

    get() {
        console.log(this.movements.slice(-1).pop())
    }
};

console.log(account.latest);
account.get()

account.latest = 50;
console.log(account.movements);

//-------------------------------------

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //os métodos fora do constructor serão adicionas altomaticamente ao protótipo
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    greet() {
        console.log(2021 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }
    // toda vez que criamos um objeto, esse set é executado
    // set a property that already exists
    // we do this above
    set fullName (name) {
        console.log(name)
        if(name.includes(' ')){
            this._fullName = name
        }else{
            alert(`${name} is not a full name`)
        }
    }

    get fullName(){
        return this._fullName
    }
}

const jessica = new PersonCl('Jessica Davis', 1998)
// const walter = new PersonCl('Walter', 1997)
console.log(jessica)
