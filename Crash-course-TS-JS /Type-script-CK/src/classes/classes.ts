interface ICar {
  model: string;
  year: number;
  sayHello?: () => void;
}

class Car implements ICar {
  model: string;
  year: number;

  constructor(model: string, year: number) {
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
