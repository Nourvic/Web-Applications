class Car {
    model;
    year;
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    sayHello() {
        console.log(`Model of Car is = ${this.model}, and year is = ${this.year}`);
    }
}
const c = new Car("BMW", 2005);
c.sayHello();
//console.log(c);
