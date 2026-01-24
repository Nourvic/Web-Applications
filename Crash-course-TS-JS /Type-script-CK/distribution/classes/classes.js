var Car = /** @class */ (function () {
    function Car(model, year) {
        this.model = model;
        this.year = year;
    }
    Car.prototype.sayHello = function () {
        console.log("Model of Car is = ".concat(this.model, ", and year is = ").concat(this.year));
    };
    return Car;
}());
var c = new Car("BMW", 2005);
c.sayHello();
//console.log(c);
