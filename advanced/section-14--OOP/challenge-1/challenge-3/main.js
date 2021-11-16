"strict mode";

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(
        `${this.make} going at ${this.speed} km/h`
    );
};


Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
};

const EV = function (make, speed, charge) {
    this.charge = charge;
    Car.call(this, make, speed);
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(this.charge);
};

EV.prototype.accelerate = function() {
    this.speed +=20;
    this.charge --;

    console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
        );
}

const tesla = new EV("tesla", 120, 23);
tesla.brake();

/*nessa cadeia de protótipo existem dois métodos "accelerate" um no "Car" em si e o outro
diretamente no "EV", o javascript executá apenas o primeiro método da cadeia de protótipos */
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

// console.log(tesla)
