"use strict";
//Typescript Assignment 2 
// Name : Saleh Muhammad Farooq
// Roll No - TS-123521
console.log('%cSaleh Muhammad Farooq - TS-123521!', 'color: black; font-size: 18  px; background-color: lightBlue;');
class Vehicle {
    constructor(make, model, year, rented) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set isRented(val) {
        this._rented = val;
    }
    rent() {
        if (this._rented) {
            console.log("This vehicle is rented.");
        }
        else {
            this._rented = true;
            console.log("you can rent this vehicle");
        }
    }
    return() {
        if (!this._rented) {
            console.log("this vehcile is not rented");
        }
        else {
            this._rented = false;
            console.log("Vehicle returned");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, capacity, fuel) {
        super(make, model, year, rented);
        this._capacity = capacity;
        this._fuel = fuel;
    }
    rentalRate() {
        return 1000;
    }
}
class Bike extends Vehicle {
    constructor(make, model, year, rented, fuelCapacity, engine) {
        super(make, model, year, rented);
        this._fuelCapacity = fuelCapacity;
        this._engine = engine;
    }
    rentalRate() {
        return 500;
    }
}
class Coach extends Vehicle {
    constructor(make, model, year, rented, wheels, seats) {
        super(make, model, year, rented);
        this._wheels = wheels;
        this._seats = seats;
    }
    rentalRate() {
        return 1500;
    }
}
let car1 = new Car('Suzuki', 'WagonR', 2020, true, 4, 'Petrol');
console.log(car1);
car1.return();
car1.rent();
console.log(car1.rentalRate());
let Bike1 = new Bike('Kawasaki', 'Ninja ZX', 2018, false, '20 Litre', 'Four Stroke');
console.log(Bike1);
Bike1.rent();
Bike1.return();
console.log(Bike1.rentalRate());
let coach1 = new Coach('Daewood', 'F-11', 2016, true, 10, 4);
console.log(coach1);
coach1.rent();
coach1.return();
console.log(coach1.rentalRate());
//# sourceMappingURL=index.js.map