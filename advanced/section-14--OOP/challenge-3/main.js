"strict mode";

const Car = function (make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const EV = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

//linking prototytpes
EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo){
    this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge --;
    console.log(`${this.make} is going at ${this.speed} km/h, with a change of ${this.charge}` );
}

const tesla = new EV('Tesla', 120, 23)
tesla.chargeBattery(90);
tesla.brake();
//when we have two methods or properties with the same name in the prototype chain
//javascript will execute the first one that appears in the chain
tesla.accelerate()
console.log(tesla)