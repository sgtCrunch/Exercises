
/*
    Create a class for vehicle. Each vehicle instance should
    have the following properties:

    - make
    - model
    - year

    Each vehicle instance should have access to a method called 
    ***honk***, which returns the string “Beep.”
*/
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep";
    }
    toString(){
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}.`;
    }
}


/*
    Create a class for a car. The Car class should inherit 
    from Vehicle and each car instance should have a property 
    called numWheels which has a value of 4.
*/
class Car extends Vehicle {
    constructor(make, year, model){
        super(make, year, model);
        this.numWheels = 4;
    }
}


/*
    Create a class for a Motorcycle. This class should inherit from 
    Vehicle and each motorcycle instance should have a property 
    called numWheels which has a value of 2. It should also have 
    a revEngine method which returns “VROOM!!!”
*/

class Motorcycle extends Vehicle {
    constructor(make, year, model){
        super(make, year, model);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

/*
    Create a class for a Garage. It should have a property called 
    ***vehicles*** which will store an array of vehicles, and a 
    property called ***capacity*** which is a number indicating 
    how many vehicles will fit in the garage. When you create a 
    garage, ***vehicles*** will always be empty; you only need to 
    provide the ***capacity***.

    A garage should also have an ***add*** method, which attempts 
    to add a vehicle to the array of vehicles. However, if you try 
    to add something which is *not* a vehicle, the garage should 
    return the message “Only vehicles are allowed in here!”. Also, 
    if the garage is at capacity, it should say “Sorry, we’re full.”
*/

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle){
        if(!(vehicle instanceof Vehicle)) return "Only vehicles are allowed in here!";
        if(this.vehicles.length === this.capacity) return "Sorry, we're full.";
        this.vehicles.push(vehicle);
        return "Vehicle added!";
    }
}


