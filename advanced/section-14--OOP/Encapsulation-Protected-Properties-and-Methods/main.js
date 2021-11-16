"strict mode";

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        //we use this underscore as a convention
        //we this we know we shouldn't access this property directly
        //and we know that this property should be protected
        this._pin = pin;
        // this._movements = []; //protected property
        this.locale = navigator.language;

        console.log(`Thanks for opening an account ${this.owner}`);
    }

    getMovements(){
        return this._movements
    }

    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    _approvedLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approvedLoan(val)) {
            this.deposit(val);
            console.log("Loan approved");
        }
    }
}

const account1 = new Account("Jonas", "EUR", 1111);

// account1._movements.push(250);
// account1._movements.push(-100);

account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
//with this method we can access the movements, but we cannot over write'em
// console.log(account1.getMovements());

// console.log(account1);
// console.log(account1.pin)
