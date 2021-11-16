"strict mode";

//public fields
//private fields
//public methods
//private methods

//static version

class Account {
    //PUBLIC FIELDS
    //this public fileds will be present in all instances that we create
    //eles não são protótipos
    locale = navigator.language; //we need to use this ";"

    //PRIVATE FIELDS
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        //we use this underscore as a convention
        //we this we know we shouldn't access this property directly
        //and we know that this property should be protected
        this._pin = pin;
        this.#pin = pin;
        // this._movements = []; //protected property
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account ${this.owner}`);
    }

    //Public methods
    //Public interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    requestLoan(val) {
        // if (this.#approvedLoan(val)) {
        //     this.deposit(val);
        //     console.log("Loan approved");
        // }
        if (this._approvedLoan(val)) {
            this.deposit(val);
            console.log("Loan approved");
        }
    }

    //Private methods
    //this are not available in some browsers

    // #approvedLoan(val) {
    //     return true;
    // }
    _approvedLoan(val) {
        return true;
    }

}

const account1 = new Account("Jonas", "EUR", 1111);

// account1._movements.push(250);
// account1._movements.push(-100);

account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
//with this method we can access the movements, but we cannot over write'em
console.log(account1.getMovements());

console.log(account1);
// console.log(account1.pin)
// console.log(account1.#movements)
// console.log(account1.#approvedLoan(100))
