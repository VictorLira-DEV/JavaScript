"strict mode";

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going and at ${this.speed}`);
        return this
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this
    }
}

class EVCl extends CarCl {
    #charge; //this property is encapsulated inside this class
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    //with this method we can manipulate the charge property 
    //but we cannot access it directly
    //which is great
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`
        );
        return this
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`
        );
        return this
    }
}

// const tesla = new CarCl("Tesla", 120);
const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
rivian.accelerate().chargeBattery(100).brake()