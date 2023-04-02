//Typescript Assignment 2 
// Name : Saleh Muhammad Farooq
// Roll No - TS-123521

console.log('%cSaleh Muhammad Farooq - TS-123521!', 'color: black; font-size: 18  px; background-color: lightBlue;');

abstract class Vehicle {
  private _make: string;
  private _model: string;
  private _year: number;
  private _rented: boolean;
  constructor(make: string, model: string, year: number, rented: boolean) {
    this._make = make;
    this._model = model;
    this._year = year;
    this._rented = rented;
  }

  get make(): string {
    return this._make;
  }

  get model(): string {
    return this._model;
  }
  get year(): number {
    return this._year;
  }
  get rented(): boolean {
    return this._rented;
  }

  set isRented(val: boolean) {
    this._rented = val;
  }

  abstract rentalRate(): number;

  rent(): void {
    if (this._rented) {
      console.log("This vehicle is rented.");
    } else {
      this._rented = true;
      console.log("you can rent this vehicle");
    }
  }

  return(): void {
    if (!this._rented) {
      console.log("this vehcile is not rented");
    } else {
      this._rented = false;
      console.log("Vehicle returned");
    }
  }
}

class Car extends Vehicle {
    private _capacity : number;
    private _fuel : string
    constructor(make:string , model:string ,year :number, rented : boolean, capacity : number , fuel:string ) {
        super(make , model , year ,rented )
        this._capacity = capacity
        this._fuel = fuel 
    }
    rentalRate(): number {
       return 1000
    }
}

class Bike extends Vehicle {
  private _fuelCapacity : string;
  private _engine : string;
  constructor(make:string , model:string ,year :number, rented : boolean, fuelCapacity:string , engine: string ){
    super(make , model , year, rented)
    this._fuelCapacity = fuelCapacity
    this._engine = engine
  }
  rentalRate(): number {
    return 500
  }
}


class Coach extends Vehicle {
private  _wheels:number;
private _seats : number
constructor(make:string , model:string ,year :number, rented : boolean,wheels:number, seats : number){
  super(make,model ,year, rented)
  this._wheels = wheels
  this._seats = seats
}

rentalRate(): number {
  return 1500
}
}


let car1 = new Car('Suzuki' , 'WagonR' ,2020 ,true , 4 , 'Petrol')

console.log(car1)
car1.return()
car1.rent()
console.log(car1.rentalRate())



let Bike1 = new Bike('Kawasaki' , 'Ninja ZX' , 2018 ,false , '20 Litre' , 'Four Stroke')
console.log(Bike1)
Bike1.rent()
Bike1.return()
console.log(Bike1.rentalRate())



let coach1 = new Coach('Daewood','F-11',2016,true , 10 , 4)
console.log(coach1)
coach1.rent()
coach1.return()
console.log(coach1.rentalRate())
