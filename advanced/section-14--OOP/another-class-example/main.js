"strict mode";

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account ${this.owner}`);
    }

    deposit(val) {
        this.movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    approvedLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approvedLoan(val)) {
            this.deposit(val);
            console.log("Loan approved");
        }
    }
}

const account1 = new Account("Jonas", "EUR", 1111);
account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000)

console.log(account1);
