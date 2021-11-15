"strict mode";

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going ${this.speed} km/h`);
    }

    break() {
        this.speed -= 5;
        console.log(`${this.make} is going ${this.speed} km/h`);
    }

    get speedUs() {
        return `${this.make} is going ${(this.speed / 1.6).toFixed(2)} miles/h`;
    }

    set speedUS(speedMi) {
        this.speed = speedMi * 1.6; //convertendo para km
        console.log(this.speed);
    }
}

const ford = new CarCl("Ford", 120);

ford.accelerate();
ford.accelerate();
ford.accelerate();
console.log(ford.speed)
ford.speedUS = 50; //convertendo para milhas
